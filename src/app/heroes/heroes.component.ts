import { Component, OnInit } from '@angular/core';
import { Beauty } from 'src/app/beauty';
import { baseDirectiveCreate } from '@angular/core/src/render3/instructions';
import { BeautyService } from '../beauty.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit 
{
  beautys :Beauty[];
  /**
   * ngOnInit 是一个生命周期钩子，Angular 在创建完组件
   * 后很快就会调用 ngOnInit。这里是放置初始化逻辑的好地方。
   */
  ngOnInit() 
  {
    this.getBeautys();

  }

  getBeautys():void
  {
    this.beautyService.getBeautys().subscribe(beautys => this.beautys = beautys);

  }


  constructor(private beautyService:BeautyService) 
  //当Angular 创建这个组件时，依赖注入系统就会把这个服务参数设置为HeroService的单列对象。
  {

  }


}