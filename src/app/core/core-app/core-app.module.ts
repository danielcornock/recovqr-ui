import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GeolocationService } from './services/geolocation/geolocation.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [GeolocationService]
})
export class CoreAppModule { }
