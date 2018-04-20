import { Offer } from './../../model/Offer';
import { TodoRestApiService } from '../../services/todo-rest-api.service'
import { ImageUploaderComponent } from './../image-uploader/image-uploader.component';
import { Component, OnInit } from '@angular/core';
import { MessageType } from '../../model/messagetype.enum';
import { MessageProviderService } from '../../services/messageprovider.service';
import { Router } from "@angular/router/router";

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.css']
})
export class ProposalComponent implements OnInit {

  private offer: Offer;
  constructor(private messageService: MessageProviderService, private restApiService: TodoRestApiService, private router: Router) { }

  ngOnInit() {
  }

  inputIsValid(): boolean {
    return true;
  }




}
