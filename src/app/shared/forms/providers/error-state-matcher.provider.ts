import { FormControl, FormGroupDirective } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class CustomErrorStateMatcher implements ErrorStateMatcher {
  public isErrorState(control: FormControl | null, form: FormGroupDirective): boolean {
    return !!(control?.invalid && (control.dirty || control.touched || form?.submitted));
  }
}