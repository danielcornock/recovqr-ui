import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { AuthQuery } from 'src/app/core/core-authentication/store/auth.query';
import { RouterService } from 'src/app/core/core-routing/services/router/router.service';
import { Maybe } from 'src/types/maybe.type';

@Component({
  selector: 'app-authenticated-page-container',
  templateUrl: './authenticated-page-container.component.html',
  styleUrls: ['./authenticated-page-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthenticatedPageContainerComponent implements OnInit {
  public sideMenuOpen = false;
  public userDetails$ = this.authQuery.getUserDetails();
  public pageTitle$: Observable<Maybe<string>>;

  constructor(
    private authQuery: AuthQuery,
    private routerService: RouterService,
    private router: Router
  ) {
  }
  
  public ngOnInit(): void {
    this.pageTitle$ = this.routerService.getRouteData<{ heading: string }>().pipe(
      map((data) => data.heading)
    );

    this.router.events.pipe(
      filter((event) => event instanceof NavigationStart),
      filter(() => this.sideMenuOpen)
    ).subscribe(() => {
      this.sideMenuOpen = false;
    });
  }

  public toggleSideMenu(): void {
    this.sideMenuOpen = !this.sideMenuOpen;
  }
}
