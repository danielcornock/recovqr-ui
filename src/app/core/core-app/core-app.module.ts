import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from 'src/environments/environment';
import { GeolocationService } from './services/geolocation/geolocation.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...[environment.production ? [] : AkitaNgDevtools.forRoot()]
  ],
  providers: [GeolocationService]
})
export class CoreAppModule { }
