import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiErrorResponse } from 'src/app/core/interfaces/api-error-response.interface';
import { AuthService } from 'src/app/core/modules/authentication/services/auth/auth.service';
import { AuthQuery } from 'src/app/core/modules/authentication/store/auth.query';
import { DashboardRoutes } from 'src/app/features/dashboard/constants/dashboard-routes.constants';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public form: FormGroup;
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
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public login(): void {
    if (this.form.invalid) {
      return;
    }

    this.authService.login(this.form.value).subscribe(() => {
      this.router.navigate([DashboardRoutes.Root]);
    });
  }
}
