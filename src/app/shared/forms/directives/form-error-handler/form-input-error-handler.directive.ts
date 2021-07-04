import { Directive, Input, OnChanges } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { ApiErrorMessageResponse, ApiErrorResponse } from 'src/app/core/core-http/interfaces/api-error-response.interface';

@Directive({
  selector: '[appFormInputErrorHandler]'
})
export class FormInputErrorHandlerDirective<T> implements OnChanges {
  @Input('appFormInputErrorHandler')
  public errors: ApiErrorResponse<T> | null;

  constructor(private formGroupDirective: FormGroupDirective) {
    if (!formGroupDirective) {
      throw new Error('Form error handler must be applied to the same element as a FormGroup.');
    }
  }

  public ngOnChanges(): void {
    if (!this.errors || (this.errors as ApiErrorMessageResponse).message) {
      return;
    }

    Object.entries(this.errors).forEach(([key, value]) => {
      if (this.formGroupDirective.form.controls[key]) {
        this.formGroupDirective.form.controls[key].setErrors(value);
      }
    });
  }
}
