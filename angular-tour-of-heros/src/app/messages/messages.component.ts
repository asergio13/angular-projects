import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

	// Angular will inject the singleton MessageService into
	// the messageService property when it creates the MessagesComponent
	// The property must be public because we want to bind to it 
	// in the html template
	// Angular only binds to public component properties.
	constructor(public messageService: MessageService) { }

	ngOnInit() {
  }

}
