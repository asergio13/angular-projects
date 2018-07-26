import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES} from '../mock-heros';


@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
	// declared property of type Hero
	selectedHero: Hero;
	
	// declare method taking a parameternamed hero of type Hero
	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}

	heroes = HEROES;

	constructor() { }

	ngOnInit() {
	}

}
