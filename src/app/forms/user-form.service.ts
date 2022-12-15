import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { RoleFormService } from './role-form.service';

@Injectable({
  providedIn: 'root'
})
export class UserFormService {

  constructor(private fb: FormBuilder) {
  }

 userForm() {
    return this.fb.group({
      id: ['',],
      createdAt: ['',],
      fileNumber: ['', Validators.required],
      firstName: ['', [Validators.compose([Validators.required])]],
      lastName: ['',],
      email: ['', [Validators.compose([Validators.email, Validators.required])]],
      username: ['', [Validators.compose([Validators.required])]],
      password: ['',
      [
       
      ]
      ],
      phoneNumber: ['',],
      updatedAt: ['',],
      roles: [''],
      streetNumber: ['',],
      streetLabel: ['',],
      city: ['',],
      zipCode: ['',],
      
 })
  }

}
