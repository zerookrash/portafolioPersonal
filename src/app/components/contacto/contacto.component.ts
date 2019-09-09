import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from '../../services/message.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  // tslint:disable-next-line: max-line-length
  emailPattern: any = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;


  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    last: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
    subject: new FormControl('', [Validators.required, Validators.minLength(5)]),
    message: new FormControl('', [Validators.minLength(10), Validators.maxLength(250)])
  });


  constructor(public messageService: MessageService) {}

  ngOnInit() {}


  envio() {
    if (this.contactForm.valid) {
      console.log(this.contactForm);
    } else {
      console.log('No valido!')
    }
  }


  get name() { return this.contactForm.get('name'); }
  get last() { return this.contactForm.get('last'); }
  get email() { return this.contactForm.get('email'); }
  get subject() { return this.contactForm.get('subject'); }
  get message() { return this.contactForm.get('message'); }


}
