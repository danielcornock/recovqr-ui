import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './core/core-authentication/services/auth/auth.service';
import { HttpLoadingService } from './core/core-http/services/http-loading/http-loading.service';
import { I18nService } from './core/core-translate/services/i18n/i18n.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isLoading$: Observable<boolean> = this.httpLoadingService.getIsLoading();

  constructor(
    private i18nService: I18nService,
    private authService: AuthService,
    private httpLoadingService: HttpLoadingService
  ) {}

  public ngOnInit(): void {
    this.i18nService.initialise();
    this.authService.initialise();
  }
}
