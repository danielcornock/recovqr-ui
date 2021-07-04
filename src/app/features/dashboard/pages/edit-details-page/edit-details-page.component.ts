import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { combineLatest, Observable } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { AuthQuery } from 'src/app/core/core-authentication/store/auth.query';
import { ApiErrorResponse } from 'src/app/core/core-http/interfaces/api-error-response.interface';
import { InformationService } from '../../services/information/information.service';
import { InformationQuery } from '../../store/information.query';

@Component({
  selector: 'app-edit-details-page',
  templateUrl: './edit-details-page.component.html',
  styleUrls: ['./edit-details-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditDetailsPageComponent implements OnInit {
  public isLoading$: Observable<boolean>;
  public form$: Observable<FormGroup>;
  public errors$: Observable<ApiErrorResponse>;

  constructor(
    private formBuilder: FormBuilder,
    private informationQuery: InformationQuery,
    private informationService: InformationService,
    private authQuery: AuthQuery
  ) { }

  public ngOnInit(): void {
    this.isLoading$ = this.informationQuery.selectLoading();
    this.errors$ = this.informationQuery.selectError();

    this.informationService.fetchInformation();

    this.form$ = combineLatest([
      this.informationQuery.getInformation(),
      this.authQuery.getUserDetails(),
      this.isLoading$
    ]).pipe(
      filter(([_, __, isLoading]) => !isLoading),
      take(1),
      map(([information, authDetails]) => {
        return this.formBuilder.group({
          name: [information.name || authDetails.name],
          email: [information.email || authDetails.email],
          country: [information.country],
          telephone: [information.telephone],
          message: [information.message]
        });
      })
    );
  }

  public saveForm(form: FormGroup): void {
    if (form.invalid) {
      return;
    }

    this.informationService.updateInformation(form.value);
  }
}
