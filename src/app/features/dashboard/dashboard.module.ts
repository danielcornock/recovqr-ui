import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppCommonModule } from 'src/app/common/common.module';
import { AppFormsModule } from 'src/app/shared/forms/forms.module';
import { ContactInformationFormComponent } from './components/contact-information-form/contact-information-form.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

@NgModule({
    declarations: [
        DashboardPageComponent,
        ContactInformationFormComponent
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        AppCommonModule,
        AppFormsModule
    ]
})
export class DashboardModule { }
