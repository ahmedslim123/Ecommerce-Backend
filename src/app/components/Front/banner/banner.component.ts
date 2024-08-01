import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CarouselModule,CommonModule],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  slides = [
    {
      
      alt: 'The Project Jacket',
      collection: 'The Chloe Collection',
      title: 'The Project Jacket'
    },
    {
      
      alt: 'Another Jacket',
      collection: 'The Chloe Collection',
      title: 'Another Jacket'
    },
    {
      
      alt: 'Third Item',
      collection: 'The Chloe Collection',
      title: 'Third Item'
    }
  ];

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    dots: true,
    nav: true,

    responsive: {
      0: {
        items: 1
      },
      1000: {
        items: 1
      },
      2000: {
        items: 1
      }
    }
  }
}
