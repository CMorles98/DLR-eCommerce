import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    
    private httpClient: HttpClient = inject(HttpClient)

    getUserDataById(id: string) :Observable<any>{

        const params = { id }

        return this.httpClient.get<any>('', { params })
    }

    
}