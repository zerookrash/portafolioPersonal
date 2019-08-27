import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }

  sendMessage(body) {
    console.log(body);
    return this.http.post('http://localhost:3000/formulario', body);
 }
}

