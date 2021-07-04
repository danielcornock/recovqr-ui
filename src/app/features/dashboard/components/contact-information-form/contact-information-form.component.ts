import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ApiErrorResponse } from 'src/app/core/core-http/interfaces/api-error-response.interface';
import { CountryList } from 'src/app/features/dashboard/constants/country-list.constant';

@Component({
  selector: 'app-contact-information-form',
  templateUrl: './contact-information-form.component.html',
  styleUrls: ['./contact-information-form.component.scss']
})
export class ContactInformationFormComponent {
  @Input()
  public form: FormGroup;

  @Input()
  public errors: ApiErrorResponse | null;

  @Output()
  public submitForm = new EventEmitter<void>();

  public availableCountries = CountryList;
}
