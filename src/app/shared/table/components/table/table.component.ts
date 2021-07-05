import { Component, Input, OnInit } from '@angular/core';
import { TableOptions } from '../../interfaces/table-options.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent<TResource> implements OnInit {
  @Input()
  public tableOptions: TableOptions<TResource>;

  @Input()
  public items: Array<TResource>;

  public columns: Array<keyof TResource | string>;
  public isInModal: boolean;

  public ngOnInit(): void {
    this.setColumns();
  }

  private setColumns(): void {
    this.columns = this.tableOptions.columns.map((column) => column.key);

    if (this.tableOptions.actions?.length) {
      this.columns.push('actions');
    }
  }
}
