import { HttpClient } from '@angular/common/http';
import { EnvironmentInjector, Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { User } from '../../profile/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private httpClient = inject(HttpClient)
  private baseUrl = environment.baseUrl
  

  constructor() { }

  getUserDataById(): Observable<User>{
    return this.httpClient.get<User>(`${this.baseUrl}/api/v1/users/${'7693ced0-59b9-41ba-82e1-9194264b82b8'}`)
  }

}
