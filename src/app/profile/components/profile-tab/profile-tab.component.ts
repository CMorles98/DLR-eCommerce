import { Component, OnInit, inject } from '@angular/core';
import { NiceSelectOption } from '../../../shared/interfaces/option.interface';
import { UserService } from '../../../shared/services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-tab',
  templateUrl: './profile-tab.component.html',
  styleUrl: './profile-tab.component.scss'
})
export class ProfileTabComponent implements OnInit {
  
    private userService = inject(UserService)

    pendingPurchases: number = 3
    profileImg: string | ArrayBuffer | null = null
  
    public genderSelectOptions: NiceSelectOption[] = [
      { value: 'hombre', text: 'Hombre' },
      { value: 'mujer', text: 'Mujer' },
    ];
    
    form: FormGroup = inject(FormBuilder).group({
      name: [undefined, [Validators.required]],
      phone: [undefined, [Validators.required]],
      email: ['kirito@gmail.com', [Validators.required]],
      gender: [undefined, [Validators.required]],
      address: undefined,
    }) 
    
    ngOnInit(): void {
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
