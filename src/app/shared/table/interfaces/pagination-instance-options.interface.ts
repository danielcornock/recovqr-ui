import { Observable } from 'rxjs';
import { PaginationQuery } from 'src/app/core/core-http/interfaces/pagination-query.interface';
import { PaginationResponse } from 'src/app/core/core-http/interfaces/pagination-response.interface';

export interface PaginationInstanceOptions<TResource> {
  method: (query: PaginationQuery) => Observable<PaginationResponse<TResource>>;
  initialQuery: PaginationQuery;
}
