import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { AppCommonModule } from 'src/app/common/common.module';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    AppCommonModule
  ],
  exports: [TableComponent]
})
export class TableModule { }
