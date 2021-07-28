import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { AppCommonModule } from 'src/app/common/common.module';
import { DashboardLibraryModule } from 'src/app/shared/dashboard-library/dashboard-library.module';
import { TableModule } from 'src/app/shared/table/table.module';
import { DashboardPageComponent } from './dashboard-page.component';

@NgModule({
  declarations: [DashboardPageComponent],
  imports: [
    CommonModule,
    AppCommonModule,
    DashboardLibraryModule,
    MatButtonModule,
    TableModule,
    RouterModule.forChild([{
      path: '',
      component: DashboardPageComponent
    }])
  ]
})
export class DashboardPageModule {}