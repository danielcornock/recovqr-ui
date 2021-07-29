import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { NavigationOptions } from '../../constants/navigation-items.constant';

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

  public navLinks: Array<{ link: string, label: string, icon: string, comingSoon?: boolean }>;

  public ngOnInit(): void {
    this.navLinks = NavigationOptions;
  }
}
