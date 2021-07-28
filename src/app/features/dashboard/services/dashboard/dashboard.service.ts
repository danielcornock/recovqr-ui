import { Injectable } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { SnackbarService } from 'src/app/core/core-notification/services/snackbar/snackbar.service';
import { InformationResponse } from '../../../../shared/information-library/interfaces/information-response.interface';
import { DashboardStore } from '../../store/dashboard.store';
import { DashboardApiService } from '../dashboard-api/dashboard-api.service';

@Injectable()
export class DashboardService {
  constructor(
    private dashboardApiService: DashboardApiService,
    private dashboardStore: DashboardStore,
    private snackbarService: SnackbarService
  ) { }

  public updateInformation(formData: Partial<InformationResponse>): void {
    this.dashboardStore.setLoading();
    this.dashboardStore.setError(null);

    this.dashboardApiService.updateInformation(formData).pipe(
      finalize(() => this.dashboardStore.setLoading(false))
    ).subscribe({
      next: (response) => {
        this.dashboardStore.setInformation(response);
        this.snackbarService.success('INFO_FORM.TOASTS.SUCCESS');
      },
      error: (error) => this.dashboardStore.setError(error.data)
    });
  }

  public fetchInformation(): void {
    this.dashboardStore.setLoading(true);
    this.dashboardStore.setError(null);

    this.dashboardApiService.getInformation().subscribe({
      next: (response) => {
        this.dashboardStore.setInformation(response);
        this.dashboardStore.setLoading(false);
      },
      error: (error) => {
        this.dashboardStore.setError(error.data);
        this.dashboardStore.setLoading(false);
      }
    });
  }
}
