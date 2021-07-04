import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-details-page',
  templateUrl: './edit-details-page.component.html',
  styleUrls: ['./edit-details-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditDetailsPageComponent implements OnInit {
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  public ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [''],
      country: [''],
      phone: [''],
      email: [''],
      message: ['']
    });
  }
}
