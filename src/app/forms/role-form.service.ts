import { Injectable } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class RoleFormService {

  constructor(private fb: FormBuilder) { }

  roleForm() {
    return this.fb.group({
      id: [''],
      name: ['', Validators.required],
      roleList: [''],
    })
  }
}
