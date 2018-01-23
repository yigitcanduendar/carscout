import { Injectable } from '@angular/core';
import { MessageType } from '../model/messageType.enum';

@Injectable()
export class MessageproviderService {

  constructor() { }

  private _message: string;
  private _messageType: MessageType = MessageType.success;

  display(message: string, messageBoxType?: MessageType) {
    this._message = message;
    if (!messageBoxType) {
      this._messageType = messageBoxType;
    } else {
      this._messageType = MessageType.success;
    }
    setTimeout(() => {
      this._message = '';
    }, 3000);
  }

  get message(): string {
    return this._message;
  }

  get messageBoxType(): MessageType {
    return this._messageType;
  }

}
