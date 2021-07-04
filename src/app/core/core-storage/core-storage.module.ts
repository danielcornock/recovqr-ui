import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StorageService } from './services/storage/storage.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [StorageService]
})
export class CoreStorageModule { }
