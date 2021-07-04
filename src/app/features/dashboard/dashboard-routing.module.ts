import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardRoutes } from './constants/dashboard-routes.constants';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { EditDetailsPageComponent } from './pages/edit-details-page/edit-details-page.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardPageComponent,
    data: { heading: 'NAVIGATION.DASHBOARD' }
  },
  {
    path: DashboardRoutes.EditProfile,
    component: EditDetailsPageComponent,
    data: { heading: 'NAVIGATION.EDIT_DETAILS' }
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
