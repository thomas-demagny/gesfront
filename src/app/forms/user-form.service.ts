import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class UserFormService {

  constructor(private fb: FormBuilder) {
  }

 getUserForm() {
    return this.fb.group({
      id: ['',],
      creationDate: [new Date()],
      email: ['', [Validators.compose([Validators.email, Validators.required])]],
      fileNumber: ['', Validators.required],
      firstname: ['', [Validators.compose([Validators.required])]],
      lastname: ['',],
      username: ['', [Validators.compose([Validators.required])]],
      password: ['', [Validators.compose([Validators.required])]],
      phoneNumber: ['',],
      updateDate: ['',],
      address: [],
    })
  }
}
