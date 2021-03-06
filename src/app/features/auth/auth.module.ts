import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { AppCommonModule } from 'src/app/common/common.module';
import { AppFormsModule } from 'src/app/shared/forms/forms.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthPageContainerComponent } from './components/auth-page-container/auth-page-container.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
    AuthPageContainerComponent
  ],
  imports: [
    CommonModule,
    AppCommonModule,
    AuthRoutingModule,
    AppFormsModule,
    MatButtonModule
  ],
  providers: [
  ]
})
export class AuthModule { }
