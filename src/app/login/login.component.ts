// login.component.ts

import { Component, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: any;
  password: any;
  loginError: any;
  loginSuccess: any;

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    const credentials = {
      email: this.email,
      password: this.password,
    };

    this.authService.login(credentials.email, credentials.password).subscribe(
      (data: any) => {
        this.loginSuccess = true;
        this.authService.storeToken(data.token);
        this.loginSuccess = 'login Successful';
        setTimeout(() => {
          this.router.navigateByUrl('/admin-panel');
        }, 1000);
      },
      (error: any) => {
        this.loginError = 'Invalid credentials';
        this.loginSuccess = false;
      }
    );
  }
}
