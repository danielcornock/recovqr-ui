import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/modules/authentication/services/auth/auth.service';
import { DashboardRoutes } from 'src/app/features/dashboard/constants/dashboard-routes.constants';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  public ngOnInit(): void {
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
