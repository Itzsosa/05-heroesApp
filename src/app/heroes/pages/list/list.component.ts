import { Component } from '@angular/core';
import { HeroesService } from "../../services/heroes.service";
import { Heroe } from "../../interfaces/heroes.interface";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent {

  heroes: Heroe[] = [];
  constructor(private heroesService: HeroesService) {
  }

  ngOnInit(): void {
    this.heroesService.getHeroes()
      .subscribe(heroes=> this.heroes = heroes);
  }
}
