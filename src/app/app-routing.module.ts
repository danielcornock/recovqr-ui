import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/core-authentication/guards/auth/auth.guard';
import { AuthenticatedPageContainerComponent } from './core/core-components/pages/authenticated-page-container/authenticated-page-container.component';
import { AuthRoutes } from './features/auth/constants/auth-routes.constant';
import { DashboardRoutes } from './features/dashboard/constants/dashboard-routes.constants';
import { InformationRoutes } from './features/information/constants/information-routes.constant';

const routes: Routes = [
  {
    path: InformationRoutes.Root,
    loadChildren: () => import('./features/information/information.module').then((m) => m.InformationModule)
  },

  {
    path: AuthRoutes.Root,
    loadChildren: () => import('./features/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: '',
    canActivate: [AuthGuard],
    component: AuthenticatedPageContainerComponent,
    children: [
      {
        path: DashboardRoutes.Root,
        loadChildren: () => import('./features/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: '',
        redirectTo: DashboardRoutes.Root,
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
