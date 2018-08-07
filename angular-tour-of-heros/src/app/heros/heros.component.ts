import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES} from '../mock-heros';


@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
	// declare property of type Hero, will contain the selected hero
	selectedHero: Hero;

	// declare property instanciated with the list of mock-heros
	heroes = HEROES;
	
	// declare method taking a parameter named hero of type Hero
	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}

	constructor() { }

	ngOnInit() {
	}

}
