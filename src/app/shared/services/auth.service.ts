import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AuthResponse } from '../../auth/interfaces/auth-response.interface';
import * as jwt_decode from "jwt-decode";


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
    localStorage.removeItem('token');
  }

  getToken(): string {
    return localStorage.getItem('token') || '';
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    return !!token;
  }

  getDecodedAccessToken(): any {
    try {
      const token = this.getToken()
      return jwt_decode.jwtDecode(token);
    } catch(Error) {
      return null;
    }
  }
}