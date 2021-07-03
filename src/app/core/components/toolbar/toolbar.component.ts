import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

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
        link: 'dashboard'
      },
      {
        label: 'NAVIGATION.EDIT_DETAILS',
        link: 'edit-details'
      },
      {
        label: 'NAVIGATION.PREVIEW',
        link: 'preview'
      }
    ];
  }
}
