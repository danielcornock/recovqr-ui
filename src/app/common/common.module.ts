import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { StorageService } from './services/storage/storage.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [StorageService],
  exports: [TranslateModule]
})
export class AppCommonModule { }
