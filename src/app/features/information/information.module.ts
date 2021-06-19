import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InformationRoutingModule } from './information-routing.module';
import { InformationPageComponent } from './pages/information-page/information-page.component';

@NgModule({
    declarations: [
        InformationPageComponent
    ],
    imports: [
        CommonModule,
        InformationRoutingModule
    ]
})
export class InformationModule { }
