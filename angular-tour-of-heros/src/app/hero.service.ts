import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';

import { Hero } from './hero';
import { HEROES } from './mock-heros';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

	// synchronous - not great
	getHeroesSynchronous(): Hero[] {
	  return HEROES;
	}

	// asynchronous - better !
	// Angular's HttpClient methods return RxJS Observables
	getHeroes(): Observable<Hero[]> {
		// send the message after fetching the heros
		this.messageService.add('HeroService: fetched heroes');
		return of(HEROES);
	}
	// Angular will inject the singleton MessageService into
	// the private messageService property when it creates the HeroService
  constructor(private messageService: MessageService) { }
}
