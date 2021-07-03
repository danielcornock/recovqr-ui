import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-authenticated-page-container',
  templateUrl: './authenticated-page-container.component.html',
  styleUrls: ['./authenticated-page-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthenticatedPageContainerComponent {
}
