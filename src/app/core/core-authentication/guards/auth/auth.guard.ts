import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthRoutes } from 'src/app/features/auth/constants/auth-routes.constant';
import { AuthQuery } from '../../store/auth.query';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private authQuery: AuthQuery, private router: Router) {}

  public canActivate(): Observable<boolean | UrlTree> {
    return this.authQuery.isAuthenticated().pipe(
      map((isAuthenticated) => {
        if (!isAuthenticated) {
          this.router.navigate([AuthRoutes.Root, AuthRoutes.Login]);
          return false;
        }

        return true;
      })
    );
  }
}
