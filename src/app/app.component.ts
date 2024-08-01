import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./components/Front/header/header.component";
import { CategoriesComponent } from "./components/Front/categories/categories.component";
import { ProductComponent } from "./components/Front/product/product.component";
import { BannerComponent } from "./components/Front/banner/banner.component";
import { TrendComponent } from "./components/Front/trend/trend.component";
import { DiscountComponent } from "./components/Front/discount/discount.component";
import { ServicesComponent } from "./components/Front/services/services.component";
import { InstagramComponent } from "./components/Front/instagram/instagram.component";
import { FooterComponent } from "./components/Front/footer/footer.component";
import { HomeComponent } from "./components/Front/home/home.component";
import { HomePageComponent } from './components/Front/home-page/home-page.component';
import { UserService } from './services/user.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterLink,RouterLinkActive, HomePageComponent, HeaderComponent, CategoriesComponent, ProductComponent, BannerComponent, TrendComponent, DiscountComponent, ServicesComponent, InstagramComponent, FooterComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [UserService]
})
export class AppComponent {
  title = 'ecommerce';

  constructor (private userService: UserService){

  }
}
