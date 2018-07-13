import { Component, OnInit } from '@angular/core';
import { Beauty } from '../beauty';
import { BeautyService } from '../beauty.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Beauty[] = [];

  constructor(private heroService: BeautyService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getBeautys()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}