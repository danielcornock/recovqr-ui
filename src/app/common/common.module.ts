import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslateModule } from '@ngx-translate/core';
import { SnackbarService } from './services/snackbar/snackbar.service';
import { StorageService } from './services/storage/storage.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSnackBarModule
  ],
  providers: [StorageService, SnackbarService],
  exports: [
    TranslateModule,
    MatIconModule,
    MatProgressSpinnerModule
  ]
})
export class AppCommonModule { }
