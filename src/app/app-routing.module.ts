import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardRoutes } from './features/dashboard/constants/dashboard-routes.constants';
import { InformationRoutes } from './features/information/constants/information-routes.constant';

const routes: Routes = [
  {
    path: InformationRoutes.Page,
    loadChildren: () => import('./features/information/information.module').then(m => m.InformationModule)
  },
  {
    path: DashboardRoutes.page,
    loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)
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
