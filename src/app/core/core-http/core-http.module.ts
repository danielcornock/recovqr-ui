import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ApiUrlProvider } from './providers/api-url.provider';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ApiUrlProvider
  ]
})
export class CoreHttpModule { }
