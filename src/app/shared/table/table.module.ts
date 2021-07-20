import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AppCommonModule } from 'src/app/common/common.module';
import { PaginatedTableComponent } from './components/paginated-table/paginated-table.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    TableComponent,
    PaginatedTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    AppCommonModule,
    MatTooltipModule,
    MatButtonModule,
    MatPaginatorModule
  ],
  exports: [TableComponent, PaginatedTableComponent]
})
export class TableModule { }
