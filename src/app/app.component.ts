import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrorDirective } from './directives/error.directive';


@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, ErrorDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  cities = signal(['Mumbai', 'Kolkata', 'Delhi']);

  form = new FormGroup({
    firstName: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(5)
      ]
    }),
    lastName: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.maxLength(10)
      ]
    }),
    age: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.min(17),
        Validators.max(20),
      ]
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.pattern(``) // add email regex
      ]
    }),
    phone: new FormControl('', {
      nonNullable: true,
      validators: [
        // Validators.pattern('/[0-9]${10}/')
      ]
    }),
    city: new FormControl('', {
      nonNullable: true,
      validators: [

      ]
    }),
    gender: new FormControl('', {
      nonNullable: true,
      validators: [

      ]
    }),
    militaryStatus: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required
      ]
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(6)
      ]
    }),
    confirmPassword: new FormControl('', {
      nonNullable: true,
      validators: [

      ]
    }),
  })

  onSubmit() {

  }
}
