import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/core-authentication/services/auth/auth.service';
import { I18nService } from './core/core-translate/services/i18n/i18n.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private i18nService: I18nService,
    private authService: AuthService
  ) {}

  public ngOnInit(): void {
    this.i18nService.initialise();
    this.authService.initialise();
  }
}
