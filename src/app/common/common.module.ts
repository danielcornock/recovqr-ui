import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslateModule } from '@ngx-translate/core';
import { SafePipe } from './pipes/safe/safe.pipe';
import { SnackbarService } from './services/snackbar/snackbar.service';

@NgModule({
  declarations: [
    SafePipe
  ],
  imports: [
    CommonModule,
    MatSnackBarModule
  ],
  providers: [SnackbarService],
  exports: [
    TranslateModule,
    MatIconModule,
    MatProgressSpinnerModule,
    SafePipe
  ]
})
export class AppCommonModule { }
