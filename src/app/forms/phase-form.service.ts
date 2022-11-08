import {Injectable} from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class PhaseFormService {
  constructor(private fb: FormBuilder) {
  }

  getPhaseForm() {
    return this.fb.group({
      id: '',
      isEnded: [''],
      phaseCode: [''],
      startDate: [''],
      status: [''],
      updateDate: [new Date()],
      amount: [''],
      creationDate: [new Date()],
      description: [''],
      endDate: [''],
      bills: [],
      project: [''],
    });
  }
}
