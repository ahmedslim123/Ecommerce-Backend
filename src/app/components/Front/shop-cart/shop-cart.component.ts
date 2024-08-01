import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { InstagramComponent } from "../instagram/instagram.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-shop-cart',
  standalone: true,
  imports: [HeaderComponent, InstagramComponent, FooterComponent],
  templateUrl: './shop-cart.component.html',
  styleUrl: './shop-cart.component.css'
})
export class ShopCartComponent {

}
