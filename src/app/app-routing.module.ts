import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes/heroes.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent} from './dashboard/dashboard.component';
import { BeautyDetailComponent } from './beauty-detail/beauty-detail.component';


export const routes:Routes = 
[
  {
    path:'beautys',component:HeroesComponent
  },
  {
    path:'dashboard',component:DashboardComponent
  },
  {
    path:'',redirectTo:'/dashboard',pathMatch:'full'

  },
  {
    path:'detail/:id',component:BeautyDetailComponent
  }
]
@NgModule
({
  imports: 
  [
    CommonModule
  ]
})
export class AppRoutingModule { }

