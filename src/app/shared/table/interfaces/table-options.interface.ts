export interface TableOptions<T> {
  columns: Array<TableColumn<T>>;
  actions?: Array<TableAction<T>>;
}

export interface TableColumn<T> {
  label: string;
  key: string;
  parser?(item: T): string | number;
}

export interface TableAction<T> {
  icon: string;
  tooltip: string;
  action(item: T): void;
}