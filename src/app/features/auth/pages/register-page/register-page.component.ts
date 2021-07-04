import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/core-authentication/services/auth/auth.service';
import { AuthQuery } from 'src/app/core/core-authentication/store/auth.query';
import { ApiErrorResponse } from 'src/app/core/core-http/interfaces/api-error-response.interface';
import { DashboardRoutes } from 'src/app/features/dashboard/constants/dashboard-routes.constants';
import { AuthRoutes } from '../../constants/auth-routes.constant';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  public form: FormGroup;
  public showPassword = false;

  public isLoading$: Observable<boolean>;
  public errors$: Observable<ApiErrorResponse>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private authQuery: AuthQuery
  ) {}

  public ngOnInit(): void {
    this.isLoading$ = this.authQuery.selectLoading();
    this.errors$ = this.authQuery.selectError();

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  public register(): void {
    if (this.form.invalid) {
      return;
    }

    this.authService.register(this.form.value).subscribe(() => {
      this.router.navigate([DashboardRoutes.Root]);
    });
  }

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  public goToLoginPage(): void {
    this.router.navigate([AuthRoutes.Root, AuthRoutes.Login]);
  }
}
