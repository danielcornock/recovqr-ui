import { Injectable } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { SnackbarService } from 'src/app/common/services/snackbar/snackbar.service';
import { InformationResponse } from '../../interfaces/information-response.interface';
import { DashboardStore } from '../../store/dashboard.store';
import { DashboardApiService } from '../dashboard-api/dashboard-api.service';

@Injectable()
export class DashboardService {
  constructor(
    private informationApiService: DashboardApiService,
    private informationStore: DashboardStore,
    private snackbarService: SnackbarService
  ) { }

  public updateInformation(formData: Partial<InformationResponse>): void {
    this.informationStore.setLoading();
    this.informationStore.setError(null);

    this.informationApiService.updateInformation(formData).pipe(
      finalize(() => this.informationStore.setLoading(false))
    ).subscribe({
      next: (response) => {
        this.informationStore.setInformation(response);
        this.snackbarService.success('INFO_FORM.TOASTS.SUCCESS');
      },
      error: (error) => this.informationStore.setError(error.data)
    });
  }

  public fetchInformation(): void {
    this.informationStore.setLoading(true);
    this.informationStore.setError(null);

    this.informationApiService.getInformation().subscribe({
      next: (response) => {
        this.informationStore.setInformation(response);
        this.informationStore.setLoading(false);
      },
      error: (error) => {
        this.informationStore.setError(error.data);
        this.informationStore.setLoading(false);
      }
    });
  }
}
