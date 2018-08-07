import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

	messages: string[] = [];

	// method to add a message in memory
	add(message: string) {
		this.messages.push(message);
	}
	// delete messages from memory
	clear() {
		this.messages = [];
	}
	constructor() { }
}
