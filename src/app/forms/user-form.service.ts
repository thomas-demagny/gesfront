import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class UserFormService {

  constructor(private fb: FormBuilder) {
  }

 userForm() {
    return this.fb.group({
      id: ['',],
      createdAt: [new Date('now'),],
      fileNumber: ['', Validators.required],
      firstName: ['', [Validators.compose([Validators.required])]],
      lastName: ['',],
      email: ['', [Validators.compose([Validators.email, Validators.required])]],
      username: ['', [Validators.compose([Validators.required])]],
      password: ['',
        [
          Validators.compose(
            [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(18),
            Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
          ]
        )
        ]
      ],
      phoneNumber: ['',],
      updatedAt: ['',],
      address: [''],
      roles: [''],
 })
  }
}
