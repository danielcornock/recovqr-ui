import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformationPageComponent } from './pages/information-page/information-page.component';

const routes: Routes = [
  {
    path: '/',
    component: InformationPageComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class InformationRoutingModule { }
