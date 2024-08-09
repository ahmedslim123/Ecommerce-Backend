import { Component } from '@angular/core';
import { AsideComponent } from "../aside/aside.component";
import { NavBackComponent } from "../nav-back/nav-back.component";
import { FooterBackComponent } from "../footer-back/footer-back.component";
import { SettingsComponent } from "../settings/settings.component";

@Component({
  selector: 'app-home-back',
  standalone: true,
  imports: [AsideComponent, NavBackComponent, FooterBackComponent, SettingsComponent],
  templateUrl: './home-back.component.html',
  styleUrl: './home-back.component.css'
})
export class HomeBackComponent {

}
