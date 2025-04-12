import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  email!: string;
  password!: string;
  registerError!: string;
  registerSuccess!:string;

  constructor(
    private router: Router,
    private http: HttpClient,
    private authService: AuthService
  ) {}
  register() {
    const credentials = {
      email: this.email,
      password: this.password,
    };

    this.authService
      .register(credentials.email, credentials.password)
      .subscribe(
        (data: any) => {
          this.registerSuccess = 'User added successfully'
          console.log('registration successful', data);

          setTimeout(() => {
            this.router.navigate(['/admin-panel']);
          }, 2000);
        },
        (error: any) => {
          this.registerError = 'Failed to add user';
        }
      );
  }
}
