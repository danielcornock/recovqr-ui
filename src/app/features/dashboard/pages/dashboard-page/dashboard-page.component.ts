import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, forkJoin, Observable } from 'rxjs';
import { finalize, map, take } from 'rxjs/operators';
import { TableOptions } from 'src/app/shared/table/interfaces/table-options.interface';
import { Tag } from '../../interfaces/tag.interface';
import { DashboardApiService } from '../../services/dashboard-api/dashboard-api.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {
  public qrCode$: Observable<string>;
  public isLoading$ = new BehaviorSubject<boolean>(true);
  public tags$: Observable<Tag[]>;

  public tableOptions: TableOptions<unknown>;
  public items = [];

  constructor(private dashboardApiService: DashboardApiService) {}

  public ngOnInit(): void {
    this.isLoading$.next(true);
    this.createTable();

    const data$ = forkJoin([
      this.dashboardApiService.getOwnQrCode().pipe(take(1)),
      this.dashboardApiService.getTagList().pipe(take(1))
    ]).pipe(
      finalize(() => this.isLoading$.next(false))
    );

    this.qrCode$ = data$.pipe(map(([qrRes]) => qrRes.qrCode));
    this.tags$ = data$.pipe(map(([_, tags]) => tags));
  }

  private createTable(): void {
    const translationKey = 'DASHBOARD.TAGS.TABLE.';

    this.tableOptions = {
      columns: [
        {
          key: 'location',
          label: translationKey + 'LOCATION'
        },
        {
          key: 'date',
          label: translationKey + 'DATE'
        },
        {
          key: 'time',
          label: translationKey + 'TIME'
        }
      ],
      actions: []
    };
  }
}
