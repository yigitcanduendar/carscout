import { Component, OnInit } from '@angular/core';
import { MessageProviderService } from '../../services/messageprovider.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(msgService: MessageProviderService) { }
  public benutzer: User = new User();
  public cb_agb: boolean = false;
  public password2: string = "";

  chechValid() {

  }

}
