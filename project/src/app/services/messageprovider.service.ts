import { Injectable } from '@angular/core';
import { MessageType } from '../model/messagetype.enum';

@Injectable()
export class MessageProviderService {

  constructor() { }

  private _message: string;
  private _messageType: MessageType = MessageType.success;

  //Sendet an alle komponente eine Message mit gegebenen MessageType
  display(message: string, messageType?: MessageType) {
    this._message = message;
    this._messageType = messageType;
    setTimeout(() => {
      this._message = '';
    }, 3000);
  }

  //Liefert die Mesage aus dem service raus für Komponente, die Messages zeigen können 
  //Aufruf dieser methode Bsp. messagebox.component.ts
  get message(): string {
    return this._message;
  }

  //Liefert die MesageType aus dem service raus für Komponente, die Messages Typ-Bedingt zeigen können 
  //Aufruf dieser methode Bsp. messagebox.component.ts
  get messageType(): MessageType {
    return this._messageType;
  }

}
