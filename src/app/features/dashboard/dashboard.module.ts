import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppCommonModule } from 'src/app/common/common.module';
import { AppFormsModule } from 'src/app/shared/forms/forms.module';
import { InformationLibraryModule } from 'src/app/shared/information-library/information-library.module';
import { ContactInformationFormComponent } from './components/contact-information-form/contact-information-form.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { EditDetailsPageComponent } from './pages/edit-details-page/edit-details-page.component';
import { DashboardApiService } from './services/dashboard-api/dashboard-api.service';
import { DashboardService } from './services/dashboard/dashboard.service';
import { DashboardQueryService } from './store/dashboard.query';
import { DashboardStore } from './store/dashboard.store';

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
    AppFormsModule,
    InformationLibraryModule
  ],
  providers: [
    DashboardApiService,
    DashboardQueryService,
    DashboardStore,
    DashboardService
  ]
})
export class DashboardModule { }
