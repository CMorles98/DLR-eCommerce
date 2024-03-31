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
  private baseUrl = `${environment.baseUrl}/v1/users`
  

  getUserDataById(id: string): Observable<User>{
    return this.httpClient.get<User>(`${this.baseUrl}/${id}`)
  }

}
