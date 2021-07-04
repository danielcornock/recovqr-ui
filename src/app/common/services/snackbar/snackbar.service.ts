import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class SnackbarService {
  constructor(private snackbar: MatSnackBar, private translateService: TranslateService) {}

  public success(translation: string): void {
    const message = this.translateService.instant(translation);

    this.snackbar.open(message, '', {
      panelClass: 'snackbar-success',
      duration: 2000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom'
    });
  }
}
