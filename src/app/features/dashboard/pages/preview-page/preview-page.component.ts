import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { finalize, take } from 'rxjs/operators';
import { InformationResponse } from '../../interfaces/information-response.interface';
import { DashboardApiService } from '../../services/dashboard-api/dashboard-api.service';

@Component({
  selector: 'app-preview-page',
  templateUrl: './preview-page.component.html',
  styleUrls: ['./preview-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreviewPageComponent implements OnInit {
  public information$: Observable<InformationResponse>;
  public isLoading$ = new BehaviorSubject<boolean>(true);

  constructor(private dashboardApiService: DashboardApiService) { }

  public ngOnInit(): void {
    this.information$ = this.dashboardApiService.getInformation().pipe(
      take(1),
      finalize(() => this.isLoading$.next(false))
    );
  }
}
