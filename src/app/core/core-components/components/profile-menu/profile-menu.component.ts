import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileMenuComponent implements OnInit {
  @Input()
  public set userName(name: string) {
    this.initials = name.split(' ').map((segment) => segment[0]).join('');
  }

  @Output()
  public logOut = new EventEmitter<void>();

  public initials: string;
  public actions: Array<{ label: string, icon: string, action: () => void }>;

  public ngOnInit(): void {
    this.setActions();
  }

  private setActions(): void {
    this.actions = [
      {
        icon: 'logout',
        label: 'PROFILE_MENU.LOG_OUT',
        action: () => this.logOut.emit()
      }
    ];
  }
}
