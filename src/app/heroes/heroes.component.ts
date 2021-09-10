import { Component, OnInit } from '@angular/core';
import { Hero } from "src/app/hero";
import { HeroService } from "src/app/hero.service";
import { MessagesService } from "src/app/messages.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroesService: HeroService, private messageService: MessagesService) { }

  selected_hero?: Hero;

  list_heroes: Hero[] = [];

  getHeroes(): void {
    this.heroesService.getHeroes().subscribe(h => this.list_heroes = h);
  }

  onSelect(h: Hero): void {
    this.selected_hero = h;
    this.messageService.add(`The ${h.name} Hero has been selected!`);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

}
