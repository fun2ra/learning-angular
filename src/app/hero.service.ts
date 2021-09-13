import { Injectable } from '@angular/core';
import { Hero } from "src/app/hero";
import { heroes } from "src/app/mock-heroes";
import { Observable, of } from "rxjs";
import { MessagesService } from "./messages.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessagesService) { }

  getHeroes (): Observable<Hero[]> {
    const h = of(heroes);
    this.messageService.add('HeroService: fetched heroes');
    return h;
  }

  getHeroById (id: Number): Observable<Hero | undefined> {
    if (!id) return of(undefined);

    const h = of(heroes.find(hero => hero.id === id));
    return h;

    
  }

}
