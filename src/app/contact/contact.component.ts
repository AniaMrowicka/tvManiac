import { Component, OnInit } from '@angular/core'
import { AbstractControl, NgModel } from '@angular/forms'

@Component({
  selector: 'tm-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contact = {
    email: '',
    message: '',
  }
  constructor() {}

  hasErrors(control: NgModel): boolean {
    return (control.dirty || control.touched) && control.invalid
  }
}
