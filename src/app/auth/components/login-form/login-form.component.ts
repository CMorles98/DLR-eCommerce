import { AfterViewInit, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements AfterViewInit {
  //services
  fb: FormBuilder = inject(FormBuilder)
  authService: AuthService = inject(AuthService)
  toastr: ToastrService = inject(ToastrService)
  router: Router = inject(Router)
  spinner: NgxSpinnerService = inject(NgxSpinnerService)

  isShowPass = false;
  
  constructor( ) {
    this.spinner.show()
  }

  ngAfterViewInit(): void {
    this.spinner.hide()
  }

  handleShowPass () {
    this.isShowPass = !this.isShowPass;
  }

  public form: FormGroup = this.fb.group({
    email: [undefined, [Validators.required, Validators.email]],
    password: [undefined, [Validators.required, Validators.minLength(6) ]]
  });


  onSubmit() {
    
    this.spinner.show()
    const { email, password } = this.form.value

    this.authService.login(email, password)
    .pipe(finalize(() => this.spinner.hide()))
    .subscribe({
      next(value) {
        localStorage.setItem('jwt_token', value.token)
      },
      complete: () => {
        this.router.navigateByUrl('/')
      },
      error: (err) => {
        this.toastr.error('', err.error.message, {
          positionClass: 'toast-top-right'
        })
      }
    })
  }

  get email(){
    return this.form.get('email')
  }
  get password(){
    return this.form.get('password')
  }
}
