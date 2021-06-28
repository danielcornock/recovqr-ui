import { Pipe, PipeTransform } from '@angular/core';
import { FormErrors } from '../../constants/form-errors.constant';

@Pipe({
  name: 'formErrors'
})
export class FormErrorsPipe implements PipeTransform {
  public transform(errors: Record<string, unknown> | null): string {
    if (!errors) {
      return '';
    }

    const errorKeys = Object.keys(errors);

    if (!errorKeys.length) {
      return '';
    }

    const firstError = errorKeys[0];

    const clientSideErrorFn = FormErrors[firstError as keyof typeof FormErrors];

    if (!clientSideErrorFn) {
      return 'VALIDATION_ERRORS.FALLBACK';
    }

    return (clientSideErrorFn as (...args: unknown[]) => string)(errors[firstError]);
  }
}
