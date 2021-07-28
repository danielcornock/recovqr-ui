import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { combineLatest, Observable } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { ApiErrorResponse } from 'src/app/core/core-http/interfaces/api-error-response.interface';
import { DashboardService } from '../../services/dashboard/dashboard.service';
import { DashboardQueryService } from '../../store/dashboard.query';

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
    private informationQuery: DashboardQueryService,
    private informationService: DashboardService
  ) { }

  public ngOnInit(): void {
    this.isLoading$ = this.informationQuery.selectLoading();
    this.errors$ = this.informationQuery.selectError();

    this.informationService.fetchInformation();

    this.form$ = combineLatest([
      this.informationQuery.getInformation(),
      this.isLoading$
    ]).pipe(
      filter(([_, isLoading]) => !isLoading),
      take(1),
      map(([information]) => {
        return this.formBuilder.group({
          name: [information.name],
          email: [information.email],
          country: [information.country],
          telephone: [information.telephone],
          message: [information.message],
          twitter: [information.twitter, this.twitterHandleValidator]
        }, {
          validators: this.formValidator.bind(this)
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

  private formValidator(group: FormGroup): ValidationErrors | null {
    const hasOneField = Object.values(group.controls).some((control) => !!control.value);

    if (hasOneField) {
      return null;
    }

    return { message: 'INFO_FORM.ERRORS.ATLEAST_ONE' };
  }

  private twitterHandleValidator(control: FormControl): ValidationErrors | null {
    if (!control.value || !control.value.includes('@')) {
      return null;
    }

    return { customError: 'INFO_FORM.VALIDATORS.NO_AT_SYMBOL' };
  }
}
