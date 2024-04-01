import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { User } from '../../profile/interfaces/user.interface';
import { NiceSelectOption } from '../interfaces/option.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  genderNiceSelectValue = signal<NiceSelectOption | undefined>(undefined)

  private httpClient = inject(HttpClient)
  private baseUrl = `${environment.baseUrl}/v1/users`

  getUserDataById(id: string): Observable<User> {
    return this.httpClient.get<User>(`${this.baseUrl}/${id}`)
  }

  updateUser(id: string, input: User, file: File | undefined): Observable<User> {
    const formData = new FormData();
    formData.append('email', input.email);
    formData.append('name', input.name);
    formData.append('phoneNumber', input.phoneNumber);
    formData.append('gender', input.gender);
    formData.append('address', input.address);
    if(input.imgUrl)
    {
      formData.append('imgUrl', input.imgUrl);
    }
    if (file) {
      formData.append('file', file);
    }

    return this.httpClient.patch<User>(`${this.baseUrl}/${id}`, formData);
  }

}
