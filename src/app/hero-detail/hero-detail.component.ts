import { Component, OnInit, Input } from '@angular/core';
import { Hero } from "src/app/hero";
import { Location } from "@angular/common";
import { HeroService } from "src/app/hero.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor(
    private location: Location,
    private heroService: HeroService,
    private route: ActivatedRoute
  ) { }

  // @Input() hero?: Hero;
  hero?: Hero;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.params.id);
    console.log(id, typeof id);
    this.heroService.getHeroById(id).subscribe(h => this.hero = h);
  }

  save (hero: Hero): void {
    this.heroService.updateHero(hero).subscribe(() => this.goBack());
  }

  goBack (): void {
    this.location.back();
  }

}
