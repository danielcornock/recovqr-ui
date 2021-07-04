import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DashboardRoutes } from 'src/app/features/dashboard/constants/dashboard-routes.constants';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent implements OnInit {
  public navLinks: Array<{ link: string, label: string }>;

  public ngOnInit(): void {
    this.navLinks = [
      {
        label: 'NAVIGATION.DASHBOARD',
        link: DashboardRoutes.Root
      },
      {
        label: 'NAVIGATION.EDIT_DETAILS',
        link: `${DashboardRoutes.Root}/${DashboardRoutes.EditProfile}`
      },
      {
        label: 'NAVIGATION.PREVIEW',
        link: 'dashboard/preview'
      }
    ];
  }
}
