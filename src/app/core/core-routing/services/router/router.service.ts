import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { filter, map, mergeMap, shareReplay, startWith } from 'rxjs/operators';

@Injectable()
export class RouterService {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  public getRouteData<T = Record<string, string|number>>(): Observable<Partial<T>> {
    /* First navigation event is spoofed */
    return this.router.events.pipe(
      startWith(new NavigationEnd(1, 'url', 'null')),
      filter((event) => event instanceof NavigationEnd),
      map(() => {
        let route = this.activatedRoute.firstChild;

        while (route?.firstChild) {
          route = route.firstChild;
        }

        return route;
      }),
      mergeMap((route) => {
        if (!route?.data) {
          return of({});
        }

        return route?.data as Observable<Partial<T>>;
      }),
      shareReplay(1)
    );
  }
}
