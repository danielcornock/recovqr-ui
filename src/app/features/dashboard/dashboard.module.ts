import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppCommonModule } from 'src/app/common/common.module';
import { AppFormsModule } from 'src/app/shared/forms/forms.module';
import { ContactInformationFormComponent } from './components/contact-information-form/contact-information-form.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { EditDetailsPageComponent } from './pages/edit-details-page/edit-details-page.component';
import { InformationApiService } from './services/information-api/information-api.service';
import { InformationService } from './services/information/information.service';
import { InformationQuery } from './store/information.query';
import { InformationStore } from './store/information.store';

@NgModule({
  declarations: [
    DashboardPageComponent,
    ContactInformationFormComponent,
    EditDetailsPageComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AppCommonModule,
    AppFormsModule
  ],
  providers: [
    InformationApiService,
    InformationQuery,
    InformationStore,
    InformationService
  ]
})
export class DashboardModule { }
