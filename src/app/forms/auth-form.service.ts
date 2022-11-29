import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AuthFormService {
  constructor(private fb: FormBuilder) {}

  authForm() {
    return this.fb.group({
      username: ['', [Validators.compose([Validators.required])]],
      password: ['', [Validators.compose([Validators.required])]],
      
    });
  }
}
