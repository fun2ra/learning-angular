import { Injectable } from '@angular/core';
import { Hero } from "src/app/hero";
import { heroes } from "src/app/mock-heroes";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes (): Observable<Hero[]> {
    const h = of(heroes)
    return h;
  }

}
