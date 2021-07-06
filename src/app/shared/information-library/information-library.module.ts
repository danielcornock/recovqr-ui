import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppCommonModule } from 'src/app/common/common.module';
import { InformationDisplayComponent } from './components/information-display/information-display.component';

@NgModule({
  declarations: [
    InformationDisplayComponent
  ],
  imports: [
    CommonModule,
    AppCommonModule
  ],
  exports: [InformationDisplayComponent]
})
export class InformationLibraryModule { }
