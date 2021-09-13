import { Component, OnInit } from '@angular/core';
import { Hero } from "src/app/hero";
import { HeroService } from "src/app/hero.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private heroesService: HeroService) { }

  top_heroes: Hero[] = [];

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe(heroes => this.top_heroes = heroes.slice(0, 5))
  }

}
