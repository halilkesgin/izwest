import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb(){
    const designs = [
      {id:1,name:"movie1",description:"güzel film",imageUrl:"1.jpg"},
      {id:2,name:"movie2",description:"harika film",imageUrl:"2.jpg"},
      {id:3,name:"movie3",description:"muhteşem film",imageUrl:"3.jpg"},
  ];
  return {designs};
  }
  constructor() { }
}
