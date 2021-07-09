import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { filter, finalize, map, take } from 'rxjs/operators';
import { TableOptions } from 'src/app/shared/table/interfaces/table-options.interface';
import { TagDetailModalData } from '../../components/tag-detail-modal/interfaces/tag-detail-modal-data.interface';
import { TagDetailModalComponent } from '../../components/tag-detail-modal/tag-detail-modal.component';
import { Tag } from '../../interfaces/tag.interface';
import { DashboardApiService } from '../../services/dashboard-api/dashboard-api.service';
import { DashboardService } from '../../services/dashboard/dashboard.service';
import { DashboardQueryService } from '../../store/dashboard.query';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {
  public qrCode$: Observable<string>;
  public isLoading$ = new BehaviorSubject<boolean>(true);
  public tags$: Observable<Tag[]>;

  public tableOptions: TableOptions<Tag>;

  constructor(
    private dashboardApiService: DashboardApiService,
    private dashboardService: DashboardService,
    private dashboardQueryService: DashboardQueryService,
    private datePipe: DatePipe,
    private matDialog: MatDialog
  ) {}

  public ngOnInit(): void {
    this.isLoading$.next(true);
    this.createTable();
    this.tags$ = this.dashboardQueryService.getTags();
    this.dashboardService.fetchTags();

    const data$ = combineLatest([
      this.dashboardQueryService.selectLoading(),
      this.dashboardApiService.getOwnQrCode().pipe(take(1))
    ]).pipe(
      filter(([isLoading]) => !isLoading),
      take(1),
      finalize(() => this.isLoading$.next(false))
    );

    this.qrCode$ = data$.pipe(map(([_, qrRes]) => qrRes.qrCode));
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
            this.dashboardService.deleteTag(tag._id);
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
