import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

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
        imageUrl: "keremturmus.jpg",
        designImg1: "design-detail-image-1.jpg",
        designImg2: "design-detail-image-2.jpg",
        designImg3: "design-detail-image-3.jpg",
        designImg4: "design-detail-image-4.jpg"
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
        imageUrl: "rmg.jpg",
        designImg1: "design-detail-image-1.jpg",
        designImg2: "design-detail-image-2.jpg",
        designImg3: "design-detail-image-3.jpg",
        designImg4: "design-detail-image-4.jpg"
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
        imageUrl: "okyanus.jpg",
        designImg1: "design-detail-image-1.jpg",
        designImg2: "design-detail-image-2.jpg",
        designImg3: "design-detail-image-3.jpg",
        designImg4: "design-detail-image-4.jpg"
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
        imageUrl: "coffee-and-more.jpg",
        designImg1: "design-detail-image-1.jpg",
        designImg2: "design-detail-image-2.jpg",
        designImg3: "design-detail-image-3.jpg",
        designImg4: "design-detail-image-4.jpg"
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
        imageUrl: "dahi-proje.jpg",
        designImg1: "design-detail-image-1.jpg",
        designImg2: "design-detail-image-2.jpg",
        designImg3: "design-detail-image-3.jpg",
        designImg4: "design-detail-image-4.jpg"
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
        imageUrl: "kare-proje.jpg",
        designImg1: "design-detail-image-1.jpg",
        designImg2: "design-detail-image-2.jpg",
        designImg3: "design-detail-image-3.jpg",
        designImg4: "design-detail-image-4.jpg"
      }

    ];
    const blogs = [
      {
          id: 1,
          title: "CSS3 Improved!",
          category: "Software",
          date: "12.05.2020",
          imageUrl: "blog-banner-1.jpg",
          post: `Text features: Shadowing text, text-stroke, text-shadow, browser-compatible features, and many features such as transparency using RGB have become available on web pages.
          Layout features: Opacity with opacity, with border-radius Making borders oval, shading with box-shadow Features such as multi-column text and multiple text columns have come with CSS3.
          Animation Transition effects: We can get more beautiful designs by adding animated transition effects to the properties of HTML objects.
          Border Images: Border images applied to objects when defining images have become possible.`,

      },
      {
          id: 2,
          title: "Boston Dynamics Robot Fired from Job.",
          category: "Technology",
          date: "01.05.2021",
          imageUrl: "blog-banner-2.jpg",
          post: `On Friday, the $ 94,000 contract was canceled amid growing concerns about a new member of the New York Police Department.
          While New York mayor Bill de Blasio said he was happy about Digidog's release, the city administration said, "He was sending the false message to New Yorkers, it was creepy and alienating."
          Critics of the use of robot dogs also likened remote control robotic dogs to similar 
          devices shown in the dystopian Netflix series Black Mirror. New York's Democratic MP, 
          Alexandria Ocasio Cortez, reacted by stating that the Digidog was used to target low-income 
          and non-white communities after the video.

          `,
          
      },
      {
          id: 3,
          title: "About UX/UI Design",
          category: "Design",
          date: "21.06.2021",
          imageUrl: "blog-banner-3.jpg",
          post: `
          UI and UX design is one of the most important items for your website.
                    In this article, what is UX Design and how to make ui ux design?
                    We cover many important issues such as what are the differences between UX and UI.
                    This has a serious impact on SEO and visitor session duration.
                    Discovering and implementing headlines will be of great benefit to your website.
                    If you want to get professional support for ui ux design, you can work with the SEO Agency.
                     In this way, you can provide professional ui ux design management.`
      },
      {
          id: 4,
          title: "Apple Will Vaccine Employees With COVID-19.",
          category: "Haber",
          date: "21.07.2021",
          imageUrl: "blog-banner-4.jpg",
          post: `
          Apple said on Friday that it has launched a program to help employees get voluntary COVID-19 vaccines at the iPhone manufacturer's offices.
          
                    An Apple spokesperson said the company is working with pharmacy chain Walgreens as a supplier and will launch a website for its employees to sign up for appointments.
                    
                    Apple is one of the first major Silicon Valley companies to launch a program to help vaccinate employees.`,
      }
  ];
    return {
      designs,
      blogs
    };
  }
  constructor() {}
}
