import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppCommonModule } from 'src/app/common/common.module';
import { DashboardLibraryModule } from 'src/app/shared/dashboard-library/dashboard-library.module';
import { InformationLibraryModule } from 'src/app/shared/information-library/information-library.module';
import { PreviewPageComponent } from './preview-page.component';

@NgModule({
  declarations: [PreviewPageComponent],
  imports: [
    CommonModule,
    AppCommonModule,
    DashboardLibraryModule,
    InformationLibraryModule,
    RouterModule.forChild([{
      path: '',
      component: PreviewPageComponent
    }])
  ]
})
export class PreviewPageModule {}