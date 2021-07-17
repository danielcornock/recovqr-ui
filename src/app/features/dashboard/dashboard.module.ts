import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { AppCommonModule } from 'src/app/common/common.module';
import { AppFormsModule } from 'src/app/shared/forms/forms.module';
import { InformationLibraryModule } from 'src/app/shared/information-library/information-library.module';
import { TableModule } from 'src/app/shared/table/table.module';
import { ContactInformationFormComponent } from './components/contact-information-form/contact-information-form.component';
import { TagDetailModalComponent } from './components/tag-detail-modal/tag-detail-modal.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { EditDetailsPageComponent } from './pages/edit-details-page/edit-details-page.component';
import { PreviewPageComponent } from './pages/preview-page/preview-page.component';
import { DashboardApiService } from './services/dashboard-api/dashboard-api.service';
import { DashboardService } from './services/dashboard/dashboard.service';
import { DashboardQueryService } from './store/dashboard.query';
import { DashboardStore } from './store/dashboard.store';

@NgModule({
  declarations: [
    DashboardPageComponent,
    ContactInformationFormComponent,
    EditDetailsPageComponent,
    PreviewPageComponent,
    TagDetailModalComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AppCommonModule,
    AppFormsModule,
    InformationLibraryModule,
    TableModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [
    DashboardApiService,
    DashboardQueryService,
    DashboardStore,
    DashboardService,
    DatePipe
  ]
})
export class DashboardModule { }
