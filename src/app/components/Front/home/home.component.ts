import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CategoriesComponent } from '../categories/categories.component';
import { ProductComponent } from '../product/product.component';
import { InstagramComponent } from '../instagram/instagram.component';
import { BannerComponent } from '../banner/banner.component';
import { TrendComponent } from '../trend/trend.component';
import { DiscountComponent } from '../discount/discount.component';
import { ServicesComponent } from '../services/services.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    CategoriesComponent,
    ProductComponent,
    InstagramComponent,
    BannerComponent,
    TrendComponent,
    DiscountComponent,
    ServicesComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
