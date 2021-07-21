import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from 'src/environments/environment';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...[environment.production ? [] : AkitaNgDevtools.forRoot()],
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000'
    })
  ]
})
export class CoreAppModule { }
