import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor(public messageService: MessageService) {}

  ngOnInit() {}


  contactForm(form) {
    this.messageService.sendMessage(form).subscribe(() => {
      Swal.fire(
        'Formulario de Contacto',
        'Mensaje enviado correctamente',
        'success'
        );
    });
  }
}
