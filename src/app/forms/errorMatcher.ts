import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class ErrorFormMatcher implements ErrorStateMatcher {

    isErrorState(control : FormControl | null, form: FormGroupDirective| NgForm | null): boolean {
        const isSubmitted = form && form.submitted;

        return!!(control && control.valid && (control.dirty || control.touched || isSubmitted));

    }
}
        
