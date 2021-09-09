import { Component, OnInit } from '@angular/core';
import { Hero } from "src/app/hero";
import { heroes } from "src/app/mock-heroes";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  selected_hero?: Hero = {
    id: 1,
    name: "Batman"
  };

  list_heroes = heroes;
  
  onSelect(h: Hero): void {
    this.selected_hero = h
  }

  ngOnInit(): void {
  }

}
