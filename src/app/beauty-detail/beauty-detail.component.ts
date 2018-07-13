import { Component, OnInit, Input } from '@angular/core';
import { Beauty } from '../beauty';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BeautyService } from '../beauty.service';

@Component({
  selector: 'app-beauty-detail',
  templateUrl: './beauty-detail.component.html',
  styleUrls: ['./beauty-detail.component.css']
})
export class BeautyDetailComponent implements OnInit {
  hero: Beauty;

  constructor
  (
    private route:ActivatedRoute,
    private heroService:BeautyService,
    private location:Location

  ) 
  {

  }

  ngOnInit() 
  {
    this.getHero();
  }

  getHero():void
  {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getBeauty(id).subscribe(hero => this.hero = hero);

  }

  goBack()
  {
    this.location.back();
  }


}
