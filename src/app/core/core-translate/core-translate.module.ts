import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoaderFactory } from './factories/translate-http-loader.factory';
import { I18nService } from './services/i18n/i18n.service';

@NgModule({
  declarations: [],
  providers: [I18nService],
  imports: [
    CommonModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: TranslateHttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ]
})
export class CoreTranslateModule { }
