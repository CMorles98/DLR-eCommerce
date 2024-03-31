import { Component, OnInit, inject } from '@angular/core';
import { NiceSelectOption } from '../../../shared/interfaces/option.interface';
import { UserService } from '../../../shared/services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-profile-tab',
  templateUrl: './profile-tab.component.html',
  styleUrl: './profile-tab.component.scss'
})
export class ProfileTabComponent implements OnInit {
  
    userService: UserService = inject(UserService)
    authService: AuthService = inject(AuthService)

    pendingPurchases: number = 3
    profileImg: string | ArrayBuffer | null = null
  
    public genderSelectOptions: NiceSelectOption[] = [
      { value: 'hombre', text: 'Hombre' },
      { value: 'mujer', text: 'Mujer' },
    ];
    
    form: FormGroup = inject(FormBuilder).group({
      name: [undefined, [Validators.required]],
      phoneNumber: [undefined, [Validators.required]],
      email: [undefined, [Validators.required]],
      gender: [undefined, [Validators.required]],
      address: undefined,
    }) 
    
    ngOnInit(): void {

      const { id } = this.authService.getDecodedAccessToken()

      this.userService.getUserDataById(id)
      .subscribe(user => {
        const { name, phoneNumber, email, gender, address } = user;
        this.form.patchValue({ name, phoneNumber, email, gender, address })
      })

    }
    

  changeHandler(selectedOption: NiceSelectOption) {
    this.form.get('gender')?.setValue(selectedOption.value)
  }

  saveChanges() {
    const value = this.form.value;
  }

  readImg(event: any): void {
    if (event.target.files && event.target.files[0]) {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = e => this.profileImg = reader.result;
        reader.readAsDataURL(file);
    }
}

}
