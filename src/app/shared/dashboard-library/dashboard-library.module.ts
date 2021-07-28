import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppCommonModule } from 'src/app/common/common.module';
import { AppFormsModule } from '../forms/forms.module';
import { ContactInformationFormComponent } from './components/contact-information-form/contact-information-form.component';
import { TagDetailModalComponent } from './components/tag-detail-modal/tag-detail-modal.component';

@NgModule({
  declarations: [ContactInformationFormComponent, TagDetailModalComponent],
  imports: [
    CommonModule,
    AppCommonModule,
    AppFormsModule
  ],
  exports: [ContactInformationFormComponent, TagDetailModalComponent]
})
export class DashboardLibraryModule { }
