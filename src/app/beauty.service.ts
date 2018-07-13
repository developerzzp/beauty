import { Injectable } from '@angular/core';
import { Beauty } from './beauty';
import { Observable ,of} from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { catchError ,map , tap} from 'rxjs/operators';

@Injectable
({
  providedIn: 'root'
})
export class BeautyService 
{
  handleError(arg0: any, arg1: any): any {
    throw new Error("Method not implemented.");
  }
  private heroesUrl ='api/BEAUTYS';


  // getBeauty(id): Observable<Beauty> 
  // {
  //   return of(BEAUTYS.find(beauty => beauty.id === id));
  // }


  private log(message:String)
  {
    this.messageService.add('HeroService: fetch hero id=${id}');

  }




  //服务中的服务
  constructor(
    private messageService: MessageService,
    private http:HttpClient
  ) 
  { 

  }

S
  //通过HttpClient获取英雄
  getBeautys():Observable<Beauty[]>
  {
    return this.http.get<Beauty[]>(this.heroesUrl);
  }


  getBeauty(id: number): Observable<Beauty> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Beauty>(url);
  }
  
}
