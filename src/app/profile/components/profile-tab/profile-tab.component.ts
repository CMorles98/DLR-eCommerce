import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NiceSelectOption } from '../../../shared/interfaces/option.interface';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-profile-tab',
  templateUrl: './profile-tab.component.html',
  styleUrl: './profile-tab.component.scss'
})
export class ProfileTabComponent implements OnInit {
  
    private userService = inject(UserService)
    pendingPurchases: number = 3
    profileImg: string | ArrayBuffer | null = null
  
  ngOnInit(): void {
    
  }

  form: FormGroup = inject(FormBuilder).group({
    name: ['', [Validators.required]],
    phone: '',
    email: 'kirito@gmail.com',
    address: '',
    gender: ''
  }) 
  
  public genderSelectOptions: NiceSelectOption[] = [
    { value: 'hombre', text: 'Hombre' },
    { value: 'mujer', text: 'Mujer' },
  ];

  changeHandler(selectedOption: NiceSelectOption) {
    console.log('Selected option:', selectedOption);
  }

  saveChanges() {
    console.log('submit')
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
