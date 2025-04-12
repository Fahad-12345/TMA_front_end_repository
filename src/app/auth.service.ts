import { Router } from '@angular/router';
// auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import jwt_decode from 'jwt-decode';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api';
  constructor(private http: HttpClient, private router: Router) {}
  isLoggedIn(): boolean {
    const token = this.getToken();
    return !!token;
  }

  login(Email: string, Password: string) {
    const credentials = {Email, Password };
    return this.http.post(`${this.baseUrl}/users/login`, credentials);
  }

  // Store the JWT in local storage or cookies
  storeToken(token: string): void {
    localStorage.setItem('token', token);
  }

  // Retrieve the JWT from local storage or cookies
  getToken(): string | null {
    // console.log(localStorage.getItem('token'));
    return localStorage.getItem('token');

  }
  // autoLogin() {
  //   const token = localStorage.getItem('token');
  //   const isLoggedIn = !!token; // Convert to boolean
  //   return of(isLoggedIn);
  // }

  // Register method for admin to add users
  register(Email: string, Password: string) {
    const Token = this.getToken();
    console.log(this.getToken)
    const credentials = { Email, Password };
    const headers = new HttpHeaders().set('Authorization', `Bearer ${Token}`);
    return this.http.post(`${this.baseUrl}/users/register`, credentials, {
      headers,
    });
  }

  logout(): void {
    localStorage.removeItem('token');
  }
  checkRegisteredUsers() {
    return this.http.get(`${this.baseUrl}/users/registeredUsers`);
  }
  isUserAdmin(): boolean {
    const token = this.getToken();
    // console.log(token,'tokenn')
    if (!token) {
      return false;
    } else {
      return true;
    }
    // const decodedToken: any = jwt_decode(token);
    // console.log(decodedToken);
    // return decodedToken.isSuperAdmin === true;
  }
}
