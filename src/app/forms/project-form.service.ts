import { Injectable } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ProjectFormService {

  constructor(private fb: FormBuilder) { }

  projectForm() {
    return this.fb.group({
      id: ['',],
      amount: ['', [Validators.compose([Validators.required])]],
      createdAt: [new Date()],
      endedAt: ['', [Validators.compose([Validators.required])]],
      startedAt: ['', [Validators.compose([Validators.required])]],
      updatedAt: [],
      description: ['', [Validators.compose([Validators.required])]],
      name: ['', [Validators.compose([Validators.required])]],
      code: ['', [Validators.compose([Validators.required])]],
      phases: [],
      organization: ['', Validators.required],
      users: []
    })
  }
}