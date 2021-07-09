import { Injectable } from '@angular/core';
import { finalize, take } from 'rxjs/operators';
import { SnackbarService } from 'src/app/common/services/snackbar/snackbar.service';
import { InformationResponse } from '../../interfaces/information-response.interface';
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

  public fetchTags(): void {
    this.dashboardStore.setLoading(true);
    this.dashboardStore.setError(null);

    this.dashboardApiService.getTagList().pipe(
      take(1),
      finalize(() => this.dashboardStore.setLoading(false))
    ).subscribe({
      next: (response) => this.dashboardStore.setTags(response),
      error: (error) => this.dashboardStore.setError(error.data)
    });
  }

  public deleteTag(tagId: string): void {
    this.dashboardStore.setLoading(true);
    this.dashboardStore.setError(null);

    this.dashboardApiService.deleteTag(tagId).pipe(
      take(1),
      finalize(() => this.dashboardStore.setLoading(false))
    ).subscribe({
      next: () => {
        this.dashboardStore.removeTag(tagId);
        this.snackbarService.success('DASHBOARD.TAGS.DELETE_TOAST');
      },
      error: () => this.snackbarService.error()
    });
  }
}
