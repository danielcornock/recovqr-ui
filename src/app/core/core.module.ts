import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AppCommonModule } from '../common/common.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TranslateHttpLoaderFactory } from './factories/translate-http-loader.factory';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { AuthenticatedPageContainerComponent } from './pages/authenticated-page-container/authenticated-page-container.component';
import { ApiUrlProvider } from './providers/api-url.provider';

@NgModule({
  declarations: [
    AuthenticatedPageContainerComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    AppCommonModule,
    HttpClientModule,
    AuthenticationModule,
    RouterModule,
    MatToolbarModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: TranslateHttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    ApiUrlProvider
  ]
})
export class CoreModule { }
