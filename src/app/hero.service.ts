import { Injectable } from '@angular/core';
import { Hero } from "src/app/hero";
import { heroes } from "src/app/mock-heroes";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  geHeroes (): Hero[] {
    return heroes;
  }
  
}
