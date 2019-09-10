import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// Sweet Alert
import Swal from 'sweetalert2';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  emailPattern: any = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/;

  createFormGroup() {
    return new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      last: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern)]),
      subject: new FormControl('', [Validators.required, Validators.minLength(5)]),
      message: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(100)])
    });
  }

  contactForm: FormGroup;
  titularAlerta = '';

  constructor( private dbData: MessageService ) {
    this.contactForm = this.createFormGroup();
  }

  ngOnInit() {}

  onResetForm() {
    this.contactForm.reset();
  }

  onSaveForm() {
    if (this.contactForm.valid) {
      this.dbData.sendMessage(this.contactForm.value);
      this.onResetForm();
      Swal.fire(`Mensaje Envieado con exíto`, this.titularAlerta, 'success');
    } else {
      Swal.fire(`Error!!`, this.titularAlerta, 'error');
    }
  }

  get name() { return this.contactForm.get('name'); }
  get last() { return this.contactForm.get('last'); }
  get email() { return this.contactForm.get('email'); }
  get subject() { return this.contactForm.get('subject'); }
  get message() { return this.contactForm.get('message'); }
}
