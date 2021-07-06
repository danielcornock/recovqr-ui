import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppCommonModule } from 'src/app/common/common.module';
import { InformationLibraryModule } from 'src/app/shared/information-library/information-library.module';
import { InformationRoutingModule } from './information-routing.module';
import { InformationPageComponent } from './pages/information-page/information-page.component';
import { InformationApiService } from './services/information-api/information-api.service';

@NgModule({
  declarations: [
    InformationPageComponent
  ],
  imports: [
    CommonModule,
    InformationRoutingModule,
    AppCommonModule,
    InformationLibraryModule
  ],
  providers: [
    InformationApiService
  ]
})
export class InformationModule { }
