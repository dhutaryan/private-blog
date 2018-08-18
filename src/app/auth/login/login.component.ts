import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'pb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  isTypePassword = true;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.authService.isAuthenticated.subscribe(authenticated =>
      authenticated && this.navigateByDefault());

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    this.loading = true;
    this.authService
      .login(this.loginForm.value)
      .then(() => {
        this.loading = false;
        this.navigateByDefault();
      })
      .catch(() => {
        this.loading = false;
      });
  }

  private navigateByDefault() {
    this.router.navigate(['/']);
  }
}
