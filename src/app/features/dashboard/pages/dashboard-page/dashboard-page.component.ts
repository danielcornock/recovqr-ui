import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { filter, finalize, first, map, take } from 'rxjs/operators';
import { PaginationQuery } from 'src/app/core/core-http/interfaces/pagination-query.interface';
import { SnackbarService } from 'src/app/core/core-notification/services/snackbar/snackbar.service';
import { PaginationInstance } from 'src/app/shared/table/classes/pagination-instance';
import { TableOptions } from 'src/app/shared/table/interfaces/table-options.interface';
import { TagDetailModalData } from '../../../../shared/dashboard-library/components/tag-detail-modal/interfaces/tag-detail-modal-data.interface';
import { TagDetailModalComponent } from '../../../../shared/dashboard-library/components/tag-detail-modal/tag-detail-modal.component';
import { Tag } from '../../interfaces/tag.interface';
import { DashboardApiService } from '../../services/dashboard-api/dashboard-api.service';
import { DashboardQueryService } from '../../store/dashboard.query';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {
  public qrCodes$: Observable<string[]>;
  public isLoading$ = new BehaviorSubject<boolean>(true);
  public tags$: Observable<Tag[]>;
  public selectedQrIndex = 0;

  public tableOptions: TableOptions<Tag>;
  public paginationInstance: PaginationInstance<Tag>;

  constructor(
    private dashboardApiService: DashboardApiService,
    private dashboardQueryService: DashboardQueryService,
    private datePipe: DatePipe,
    private matDialog: MatDialog,
    private snackbarService: SnackbarService
  ) {}

  public ngOnInit(): void {
    this.paginationInstance = PaginationInstance.create({
      method: (query: PaginationQuery) => {
        return this.dashboardApiService.getPaginatedTagList(query);
      },
      initialQuery: {
        pageSize: 10,
        page: 0
      }
    });

    this.isLoading$.next(true);
    this.createTable();
    this.tags$ = this.dashboardQueryService.getTags();

    const data$ = combineLatest([
      this.dashboardQueryService.selectLoading(),
      this.dashboardApiService.getOwnQrCode().pipe(take(1))
    ]).pipe(
      filter(([isLoading]) => !isLoading),
      take(1),
      finalize(() => this.isLoading$.next(false))
    );

    this.qrCodes$ = data$.pipe(map(([_, qrRes]) => qrRes.qrCodes));
  }

  public viewNextQrCode(): void {
    this.selectedQrIndex++;
  }

  public viewPreviousQrCode(): void {
    this.selectedQrIndex--;
  }

  private createTable(): void {
    const translationKey = 'DASHBOARD.TAGS.TABLE.';

    this.tableOptions = {
      columns: [
        {
          key: 'shortAddress',
          label: translationKey + 'LOCATION'
        },
        {
          key: 'date',
          label: translationKey + 'DATE',
          parser: (data) => this.datePipe.transform(data.createdAt, 'medium')
        }
      ],
      actions: [
        {
          icon: 'delete',
          action: (tag) => {
            if (!confirm('Are you sure you want to delete this tag? You will not be able to recover any information from it.')) {
              return;
            }

            this.dashboardApiService.deleteTag(tag._id).pipe(first()).subscribe(() => {
              this.paginationInstance.removeById(tag._id);
              this.snackbarService.success('DASHBOARD.TAGS.DELETE_TOAST');
            });
          },
          tooltip: 'DASHBOARD.TAGS.DELETE_TOOLTIP'
        },
        {
          icon: 'info',
          action: (tag) => this.matDialog.open<TagDetailModalData>(TagDetailModalComponent, {
            data: { tag },
            width: '100%',
            maxWidth: '400px'
          }),
          tooltip: 'DASHBOARD.TAGS.OPEN_INFO_TOOLTIP'
        }
      ]
    };
  }
}
