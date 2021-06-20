import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppCommonModule } from 'src/app/common/common.module';
import { InformationRoutingModule } from './information-routing.module';
import { InformationPageComponent } from './pages/information-page/information-page.component';

@NgModule({
    declarations: [
        InformationPageComponent
    ],
    imports: [
        CommonModule,
        InformationRoutingModule,
        AppCommonModule
    ]
})
export class InformationModule { }
