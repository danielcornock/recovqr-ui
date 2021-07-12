import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DashboardRoutes } from 'src/app/features/dashboard/constants/dashboard-routes.constants';
import { Maybe } from 'src/types/maybe.type';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent implements OnInit {
  @Input()
  public heading: Maybe<string>;

  @Input()
  public userName: string;

  @Output()
  public toggleSideMenuState = new EventEmitter<void>();

  @Output()
  public logOut = new EventEmitter<void>();

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

  public toggleMenuOpen(): void {
    this.toggleSideMenuState.emit();
  }
}
