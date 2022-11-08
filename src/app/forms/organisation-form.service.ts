import {Injectable} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class OrganisationFormService {

  constructor(private fb: FormBuilder) {
  }

  getOrganisationForm() {
    return this.fb.group({
      id: ['',],
      addrWeb: ['', [Validators.compose([Validators.required])]],
      contactEmail: ['', [Validators.compose([Validators.required])]],
      contactName: ['', [Validators.required]],
      name: ['', [Validators.required]],
      code: ['', [Validators.compose([Validators.max(7), Validators.required])]],
      phoneNumber: ['', [Validators.compose([Validators.required])]],
    })
  }
}
