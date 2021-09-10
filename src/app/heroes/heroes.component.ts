import { Component, OnInit } from '@angular/core';
import { Hero } from "src/app/hero";
import { HeroService } from "src/app/hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroesService: HeroService) { }

  selected_hero?: Hero;

  list_heroes: Hero[] = [];

  getHeroes(): void {
    this.list_heroes = this.heroesService.geHeroes();
  }
  
  onSelect(h: Hero): void {
    this.selected_hero = h;
  }

  ngOnInit(): void {
    this.getHeroes();
  }

}
