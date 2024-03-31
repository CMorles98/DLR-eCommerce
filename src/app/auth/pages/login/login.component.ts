import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  authService: AuthService = inject(AuthService) 
  router: Router = inject(Router)
  fb: FormBuilder = inject(FormBuilder)

  form: FormGroup = this.fb.group({
    userName: '',
    password: '',
  })

  onSubmit(): void {

  }
}