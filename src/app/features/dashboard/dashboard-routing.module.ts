import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardRoutes } from './constants/dashboard-routes.constants';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/dashboard-page/dashboard-page.module').then((m) => m.DashboardPageModule),
    data: { heading: 'NAVIGATION.DASHBOARD' }
  },
  {
    path: DashboardRoutes.EditProfile,
    loadChildren: () => import('./pages/edit-details-page/edit-details-page.module').then((m) => m.EditDetailsPageModule),
    data: { heading: 'NAVIGATION.EDIT_DETAILS' }
  },
  {
    path: DashboardRoutes.Preview,
    loadChildren: () => import('./pages/preview-page/preview-page.module').then((m) => m.PreviewPageModule),

    data: { heading: 'NAVIGATION.PREVIEW' }
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
