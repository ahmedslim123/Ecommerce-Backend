import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { InstagramComponent } from "../instagram/instagram.component";
import { FooterComponent } from "../footer/footer.component";
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

declare const $: any;

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [HeaderComponent, InstagramComponent, FooterComponent,NgOptimizedImage],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
  host: { 'ngSkipHydration': '' }
})


export class ProductDetailComponent implements AfterViewInit {
  @ViewChild('carousel', { static: true }) carousel!: ElementRef;

  currentImage: string = '/assets/images/product/details/product-1.jpg'; // Default image

  setImage(imageUrl: string): void {
    this.currentImage = imageUrl;
  }

  ngAfterViewInit(): void {
    
  }

}
interface JQuery {
  owlCarousel(options?: any): JQuery;
}
