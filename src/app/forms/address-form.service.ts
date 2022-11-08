import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AddressFormService {
  constructor(private fb: FormBuilder) {}

  getAddressForm() {
    return this.fb.group({
      id: [''],
      streetNumber: [
        '',
        [Validators.compose([Validators.required, Validators.maxLength(5)])],
      ],
      streetLabel: ['', [Validators.compose([Validators.required])]],
      zipCode: ['', [Validators.compose([Validators.required])]],
      country: ['', [Validators.compose([Validators.required])]],
      organization: ['', [Validators.compose([Validators.required])]],
      employee: ['', Validators.required],
    });
  }
}
