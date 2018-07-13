import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb()
  {
    const BEAUTYS =
    [
      {
          id:11,
          name:'Dora'
      },
      {
          id:12,
          name:'Lorriane'
      },
      {
          id:13,
          name:'Lucy'
      },
      {
          id:14,
          name:'YaYa'
      },
      {
          id:15,
          name:'SuSan'
      },
      {
          id:16,
          name:'Tina Yu'
      },
      {
          id:17,
          name:'Michiyo'
      },
      {
          id:18,
          name:'Elaine'
      },
      {
          id:19,
          name:'Dennise'
      },
      {
          id:20,
          name:'Bella'
      },
      {
          id:21,
          name:'Vicni'
      },
      {
          id:22,
          name:'Jellyfish'
      },
      {
          id:23,
          name:'Alice'
      }
    ];
    return {BEAUTYS};
  }
}
