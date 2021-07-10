import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { DashboardRoutes } from 'src/app/features/dashboard/constants/dashboard-routes.constants';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent implements OnInit {
  @Input()
  public userName: string;

  @Input()
  public userEmail: string;

  public navLinks: Array<{ link: string, label: string, icon: string }>;

  public ngOnInit(): void {
    this.navLinks = [
      {
        label: 'NAVIGATION.DASHBOARD',
        link: DashboardRoutes.Root,
        icon: 'qr_code_2'
      },
      {
        label: 'NAVIGATION.EDIT_DETAILS',
        link: `${DashboardRoutes.Root}/${DashboardRoutes.EditProfile}`,
        icon: 'edit'
      },
      {
        label: 'NAVIGATION.PREVIEW',
        link: 'dashboard/preview',
        icon: 'visibility'
      }
    ];
  }
}
