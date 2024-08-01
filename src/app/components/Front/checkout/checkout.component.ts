import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { InstagramComponent } from "../instagram/instagram.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [HeaderComponent, InstagramComponent, FooterComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {

}
