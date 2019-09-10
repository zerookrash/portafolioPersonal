import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Message } from '../models/message.models';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private contactCollection: AngularFirestoreCollection<Message>;

  constructor(private afs: AngularFirestore) {
    this.contactCollection = afs.collection<Message>('contacts');
   }

  sendMessage(newContact: Message): void {
    const contact = { date: new Date().toISOString(), ...newContact };
    this.contactCollection.add(contact);
 }
}

