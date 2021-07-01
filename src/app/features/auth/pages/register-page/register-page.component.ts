import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/modules/authentication/services/auth/auth.service';
import { AuthQuery } from 'src/app/core/modules/authentication/store/auth.query';
import { DashboardRoutes } from 'src/app/features/dashboard/constants/dashboard-routes.constants';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  public form: FormGroup;
  public isLoading$: Observable<boolean>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private authQuery: AuthQuery
  ) {}

  public ngOnInit(): void {
    this.isLoading$ = this.authQuery.selectLoading();
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
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
}
