import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformationRouteParams } from './constants/information-routes.constant';
import { InformationPageComponent } from './pages/information-page/information-page.component';

const routes: Routes = [
  {
    path: `:${InformationRouteParams.PageId}`,
    component: InformationPageComponent
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
export class InformationRoutingModule { }
