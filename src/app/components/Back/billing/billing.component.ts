import { Component } from '@angular/core';
import { SettingsComponent } from "../settings/settings.component";
import { FooterBackComponent } from "../footer-back/footer-back.component";
import { NavBackComponent } from "../nav-back/nav-back.component";
import { AsideComponent } from "../aside/aside.component";

@Component({
  selector: 'app-billing',
  standalone: true,
  imports: [SettingsComponent, FooterBackComponent, NavBackComponent, AsideComponent],
  templateUrl: './billing.component.html',
  styleUrl: './billing.component.css'
})
export class BillingComponent {

}
