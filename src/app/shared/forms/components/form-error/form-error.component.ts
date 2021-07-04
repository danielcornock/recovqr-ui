import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ApiErrorResponse } from 'src/app/core/core-http/interfaces/api-error-response.interface';

@Component({
  selector: 'app-form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormErrorComponent {
  @Input()
  public error: ApiErrorResponse | null;
}
