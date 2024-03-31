import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { AuthResponse } from '../../auth/interfaces/auth-response.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private apiUrl = `${environment.baseUrl}/v1/auth`; 
  private http: HttpClient = inject(HttpClient)
  
  constructor() {}

  login(email: string, password: string) {
    return this.http.post<AuthResponse>( `${this.apiUrl}/login`, {
      email,
      password
    })
  }

  logout(): void {
    localStorage.removeItem('jwt_token');
  }

  getToken(): string {
    return localStorage.getItem('jwt_token') || '';
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    return !!token;
  }
}