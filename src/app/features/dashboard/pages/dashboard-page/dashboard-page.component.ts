import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TableOptions } from 'src/app/shared/table/interfaces/table-options.interface';
import { DashboardApiService } from '../../services/dashboard-api/dashboard-api.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {
  public qrCode$: Observable<string>;
  public isLoading$: Observable<boolean>;

  public tableOptions: TableOptions<unknown>;
  public items = [];

  constructor(private dashboardApiService: DashboardApiService) {}

  public ngOnInit(): void {
    this.qrCode$ = this.dashboardApiService.getOwnQrCode().pipe(map((res) => res.qrCode));
    this.createTable();
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
