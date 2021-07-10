import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthQuery } from 'src/app/core/core-authentication/store/auth.query';
import { RouterService } from 'src/app/core/core-routing/services/router/router.service';
import { Maybe } from 'src/types/maybe.type';

@Component({
  selector: 'app-authenticated-page-container',
  templateUrl: './authenticated-page-container.component.html',
  styleUrls: ['./authenticated-page-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthenticatedPageContainerComponent {
  public sideMenuOpen = false;
  public userDetails$ = this.authQuery.getUserDetails();
  public pageTitle$: Observable<Maybe<string>>;

  constructor(
    private authQuery: AuthQuery,
    private routerService: RouterService
  ) {
    this.pageTitle$ = this.routerService.getRouteData<{ heading: string }>().pipe(
      map((data) => data.heading)
    );
  }

  public toggleSideMenu(): void {
    this.sideMenuOpen = !this.sideMenuOpen;
  }
}
