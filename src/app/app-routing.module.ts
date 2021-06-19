import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutes } from './features/auth/constants/auth-routes.constant';
import { DashboardRoutes } from './features/dashboard/constants/dashboard-routes.constants';
import { InformationRoutes } from './features/information/constants/information-routes.constant';

const routes: Routes = [
    {
        path: InformationRoutes.Root,
        loadChildren: () => import('./features/information/information.module').then(m => m.InformationModule)
    },
    {
        path: DashboardRoutes.Root,
        loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
        path: AuthRoutes.Root,
        loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: '',
        redirectTo: DashboardRoutes.Root,
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
