import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Maybe } from 'src/types/maybe.type';
import { NavigationOptions } from '../../constants/navigation-items.constant';

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

  public navLinks: Array<{ link: string, label: string, comingSoon?: boolean }>;

  public ngOnInit(): void {
    this.navLinks = NavigationOptions;
  }

  public toggleMenuOpen(): void {
    this.toggleSideMenuState.emit();
  }
}
