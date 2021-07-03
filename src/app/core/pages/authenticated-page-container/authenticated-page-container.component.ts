import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RouterService } from '../../services/router/router.service';

@Component({
  selector: 'app-authenticated-page-container',
  templateUrl: './authenticated-page-container.component.html',
  styleUrls: ['./authenticated-page-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthenticatedPageContainerComponent {
  public heading: string;
  private data$: Observable<{ heading?: string }>;

  constructor(routerService: RouterService, changeDetectorRef: ChangeDetectorRef) {
    this.data$ = routerService.getRouteData<{ heading: string }>();

    this.data$.pipe(
      map((data: { heading?: string }) => data?.heading ?? '')
    ).subscribe((heading) => {
      /* Absolutely no idea why, but the async pipe wasn't working */
      this.heading = heading;
      changeDetectorRef.markForCheck();
    });
  }
}
