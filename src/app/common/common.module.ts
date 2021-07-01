import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslateModule } from '@ngx-translate/core';
import { StorageService } from './services/storage/storage.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [StorageService],
  exports: [
    TranslateModule,
    MatIconModule,
    MatProgressSpinnerModule
  ]
})
export class AppCommonModule { }
