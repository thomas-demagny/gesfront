import {Injectable} from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class PhaseFormService {
  constructor(private fb: FormBuilder) {
  }

  phaseForm() {
    return this.fb.group({
      id: '',
      isEnded: [''],
      code: [''],
      startedAt: [''],
      status: [''],
      updatedAt: [new Date()],
      amount: [''],
      createdAt: [new Date()],
      description: [''],
      endDate: [''],
      bills: [],
      project: [''],
    });
  }
}
