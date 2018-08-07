import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
	// declare property of type Hero, will contain the selected hero
	selectedHero: Hero;

	// declare method taking a parameter named hero of type Hero
	onSelect(hero: Hero): void {
		this.selectedHero = hero;
		this.messageService.add(hero.name + ' selected.');
	}

	// declare property heroes of type array of Hero
	heroes: Hero[];

	// method to retrieve the heroes from the service
	getHeroes(): void {
	  this.heroService.getHeroes()
	  // subscribe passes the emitted array to the callback, 
	  // which sets the component's heroes property.
	      .subscribe(heroes => this.heroes = heroes);
	}

	// depency injection of a HeroService and MessageService when
	// creating the HerosComponent
	constructor(private heroService: HeroService,
		private messageService: MessageService) { }

	// OnInit interface has a hook method named ngOnInit() that Angular calls
	// shortly after creating the component.
	ngOnInit() {
		// Here is a good place to get the list of data (array of heroes)
		this.getHeroes();
	}

}
