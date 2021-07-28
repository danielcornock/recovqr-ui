import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppCommonModule } from 'src/app/common/common.module';
import { DashboardLibraryModule } from 'src/app/shared/dashboard-library/dashboard-library.module';
import { EditDetailsPageComponent } from './edit-details-page.component';

@NgModule({
  declarations: [EditDetailsPageComponent],
  imports: [
    CommonModule,
    AppCommonModule,
    DashboardLibraryModule,
    RouterModule.forChild([{
      path: '',
      component: EditDetailsPageComponent
    }])
  ]
})
export class EditDetailsPageModule {}