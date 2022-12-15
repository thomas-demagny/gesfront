import {Injectable} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class OrganizationFormService {

  constructor(private fb: FormBuilder) {
  }

  organizationForm() {
    return this.fb.group({
      id: ['',],
      website: ['', [Validators.compose([Validators.required])]],
      contactEmail: ['', [Validators.compose([Validators.email,Validators.required])]],
      contactName: ['', [Validators.required]],
      name: ['', [Validators.required]],
      code: ['', [Validators.compose([Validators.max(7), Validators.required])]],
      phoneNumber: ['', [Validators.compose([Validators.required])]],
      streetNumber: ['',],
      streetLabel: ['',],
      city: ['',],
      zipCode: ['',],
    })
  }
}
