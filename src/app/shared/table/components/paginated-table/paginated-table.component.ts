import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { PaginationQuery } from 'src/app/core/core-http/interfaces/pagination-query.interface';
import { PaginationResponse } from 'src/app/core/core-http/interfaces/pagination-response.interface';
import { PaginationInstance } from 'src/app/shared/table/classes/pagination-instance';
import { TableOptions } from 'src/app/shared/table/interfaces/table-options.interface';

@Component({
  selector: 'app-paginated-table',
  templateUrl: './paginated-table.component.html',
  styleUrls: ['./paginated-table.component.scss']
})
export class PaginatedTableComponent<TResource extends { _id: string }> implements OnInit {
  @Input()
  public paginatedTableOptions: TableOptions<TResource>;

  @Input()
  public paginationInstance: PaginationInstance<TResource>;

  public paginationResponse$: Observable<PaginationResponse<TResource>>;
  public query$: Observable<PaginationQuery>;

  public ngOnInit(): void {
    this.paginationResponse$ = this.paginationInstance.getPaginatedResource();
    this.query$ = this.paginationInstance.getQuery();
  }

  public onPaginationChange(event: PageEvent): void {
    this.paginationInstance.patchQuery({
      pageSize: event.pageSize,
      page: event.pageIndex
    });
  }
}
