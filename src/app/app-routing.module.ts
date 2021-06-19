import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardRoutes } from './dashboard/constants/dashboard-routes.constants';
import { InformationRoutes } from './information/constants/information-routes.constant';

const routes: Routes = [
  {
    path: InformationRoutes.Page,
    loadChildren: () => import('./information/information.module').then(m => m.InformationModule)
  },
  {
    path: DashboardRoutes.page,
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: '',
    redirectTo: DashboardRoutes.page,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
