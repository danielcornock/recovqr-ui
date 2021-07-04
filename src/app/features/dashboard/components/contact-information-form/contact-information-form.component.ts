import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserInformation } from 'src/app/common/interfaces/user-information.interface';

@Component({
  selector: 'app-contact-information-form',
  templateUrl: './contact-information-form.component.html',
  styleUrls: ['./contact-information-form.component.scss']
})
export class ContactInformationFormComponent {
  @Input()
  public userInformation: UserInformation = {};

  @Input()
  public form: FormGroup;
}
