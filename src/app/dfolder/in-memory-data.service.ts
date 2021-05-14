import {
  Injectable
} from '@angular/core';
import {
  InMemoryDbService
} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const designs = [
      {
        id: 1,
        name: "Kerem Turmuş PT",
        subject: "Personal Training",
        color: "Black & White",
        category: "Logo Design",
        date: "11.11.2019",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
        velit esse cillum dolore eu fugiat nulla pariatur.`,
        imageUrl: "1.jpg"
      },
      {
        id: 2,
        name: "RMG Inşaat",
        subject: "Constructor",
        color: "Dark Grey & White",
        category: "Web Design",
        date: "11.11.2019",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
        velit esse cillum dolore eu fugiat nulla pariatur.`,
        imageUrl: "2.jpg"
      },
      {
        id: 3,
        name: "Okyanus Exclusive",
        subject: "Home Sets",
        color: "Light Blue",
        category: "Brand Design",
        date: "11.11.2019",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
        velit esse cillum dolore eu fugiat nulla pariatur.`,
        imageUrl: "3.jpg"
      },
      {
        id: 4,
        name: "Coffee & More",
        subject: "Coffee Shop",
        color: "Brown & Black",
        category: "Web Design",
        date: "11.11.2019",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
        velit esse cillum dolore eu fugiat nulla pariatur.`,
        imageUrl: "4.jpg"
      },
      {
        id: 5,
        name: "Dahi Proje",
        subject: "Constructor Consulty",
        color: "Black",
        category: "Logo Design",
        date: "11.11.2019",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
        velit esse cillum dolore eu fugiat nulla pariatur.`,
        imageUrl: "5.jpg"
      },
      {
        id: 6,
        name: "Kare Proje",
        subject: "Architecture",
        color: "Gold & Silver",
        category: "Mobile App",
        date: "11.11.2019",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
        velit esse cillum dolore eu fugiat nulla pariatur.`,
        imageUrl: "2.jpg"
      }

    ];
    return {
      designs
    };
  }
  constructor() {}
}
