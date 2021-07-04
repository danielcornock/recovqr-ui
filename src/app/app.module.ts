import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreAuthenticationModule } from './core/core-authentication/authentication.module';
import { CoreComponentsModule } from './core/core-components/core-components.module';
import { CoreHttpModule } from './core/core-http/core-http.module';
import { CoreRoutingModule } from './core/core-routing/core-routing.module';
import { CoreStorageModule } from './core/core-storage/core-storage.module';
import { CoreTranslateModule } from './core/core-translate/core-translate.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CoreComponentsModule,
    CoreAuthenticationModule,
    CoreHttpModule,
    CoreTranslateModule,
    CoreRoutingModule,
    CoreStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
