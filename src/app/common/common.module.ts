import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslateModule } from '@ngx-translate/core';
import { SafePipe } from './pipes/safe/safe.pipe';

@NgModule({
  declarations: [
    SafePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TranslateModule,
    MatIconModule,
    MatProgressSpinnerModule,
    SafePipe
  ]
})
export class AppCommonModule { }
