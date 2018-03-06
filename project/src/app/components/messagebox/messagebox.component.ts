import { Component, OnInit } from '@angular/core';
import { MessageProviderService } from '../../services/messageprovider.service';
import { MessageType } from '../../model/messagetype.enum';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-message-box',
  templateUrl: './messagebox.component.html',
  animations: [
    trigger(
      'messageBoxAnimation',
      [
        transition(
          ':enter', [
            style({ opacity: 0 }),
            animate('500ms', style({ 'opacity': 1 }))
          ]
        ),
        transition(
          ':leave', [
            style({ 'opacity': 1 }),
            animate('1000ms', style({ 'opacity': 0, 'width': '50%' }))
          ]
        )]
    )
  ],
  styleUrls: ['./messagebox.component.css']
})
export class MessageboxComponent implements OnInit {

  constructor(private messageProviderService: MessageProviderService) { }

  ngOnInit() {
  }

  // Liefert die Mesage aus dem service zurück
  // Aufruf dieser methode von der HTML
  get message(): string {
    return this.messageProviderService.message;
  }

  // Liefert die MesageType aus dem service zurück
  // Aufruf dieser methode von der HTML
  get messageType(): string {
    return MessageType[this.messageProviderService.messageType];
  }
}

