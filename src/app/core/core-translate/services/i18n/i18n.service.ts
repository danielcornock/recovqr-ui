import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class I18nService {
  constructor(private translate: TranslateService) {}

  public initialise(): void {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
