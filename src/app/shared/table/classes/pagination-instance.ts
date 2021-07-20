import { FormControl } from '@angular/forms';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { debounceTime, first, switchMap, takeUntil, withLatestFrom } from 'rxjs/operators';
import { PaginationQuery } from 'src/app/core/core-http/interfaces/pagination-query.interface';
import { PaginationResponse } from 'src/app/core/core-http/interfaces/pagination-response.interface';
import { PaginationInstanceOptions } from '../interfaces/pagination-instance-options.interface';

export class PaginationInstance<TResource extends { _id: string }> {
  private query$: BehaviorSubject<PaginationQuery>;
  private resourceStore$: ReplaySubject<PaginationResponse<TResource>>;
  private destroy$ = new Subject();
  private readonly apiMethod: (query: PaginationQuery) => Observable<PaginationResponse<TResource>>;

  constructor(options: PaginationInstanceOptions<TResource>) {
    this.query$ = new BehaviorSubject({});
    this.resourceStore$ = new ReplaySubject(1);
    this.apiMethod = options.method;
    this.query$.next(options.initialQuery);
    this.listenToQueryChange();
  }

  public static create<TResource extends { _id: string }>(
    options: PaginationInstanceOptions<TResource>
  ): PaginationInstance<TResource> {
    return new PaginationInstance<TResource>(options);
  }

  public getQuery(): Observable<PaginationQuery> {
    return this.query$.asObservable();
  }

  public getPaginatedResource(): Observable<PaginationResponse<TResource>> {
    return this.resourceStore$.asObservable();
  }

  public submitQuery(query: PaginationQuery): void {
    this.query$.next(query);
  }

  public patchQuery(query: PaginationQuery): void {
    this.query$.next({
      ...this.query$.value,
      ...query
    });
  }

  public refresh(): void {
    this.query$.next(this.query$.value);
  }

  public destroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public removeById(id: string): void {
    this.resourceStore$.pipe(
      first()
    ).subscribe((existingItems) => {
      const newData = {
        count: existingItems.count - 1,
        data: existingItems.data.filter((item) => item._id !== id)
      };
      this.resourceStore$.next(newData);
    });
  }

  public createAndListenToSearch(initialSearchValue?: string): FormControl {
    const formControl = new FormControl(initialSearchValue);

    formControl.valueChanges.pipe(
      debounceTime(300),
      withLatestFrom(this.getQuery()),
      takeUntil(this.destroy$)
    ).subscribe(([search, query]) => {
      this.query$.next({
        ...query,
        search,
        page: 1
      });
    });

    return formControl;
  }

  private listenToQueryChange(): void {
    this.query$.pipe(
      switchMap((query) => this.apiMethod(query)),
      takeUntil(this.destroy$)
    ).subscribe((response) => {
      this.resourceStore$.next(response);
    });
  }
}
