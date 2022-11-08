import { Injectable } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ProjectFormService {

  constructor(private fb: FormBuilder) { }

  gpProjectForm() {
    return this.fb.group({
      id: ['',],
      amount: ['', [Validators.compose([Validators.required])]],
      creationDate: [new Date()],
      endDate: ['', [Validators.compose([Validators.required])]],
      startDate: ['', [Validators.compose([Validators.required])]],
      updateDate: ['',],
      description: ['', [Validators.compose([Validators.required])]],
      name: ['', [Validators.compose([Validators.required])]],
      code: ['', [Validators.compose([Validators.required])]],
      phases: [],
      organization: ['', Validators.required],
    })
  }
}
