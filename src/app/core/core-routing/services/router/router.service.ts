import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { filter, map, mergeMap } from 'rxjs/operators';

@Injectable()
export class RouterService {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  public getRouteData<T = Record<string, string|number>>(): Observable<Partial<T>> {
    return this.router.events.pipe(
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
      })
    );
  }
}
