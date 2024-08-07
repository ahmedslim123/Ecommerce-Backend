import { Component } from '@angular/core';
import { AsideComponent } from "../aside/aside.component";

@Component({
  selector: 'app-home-back',
  standalone: true,
  imports: [AsideComponent],
  templateUrl: './home-back.component.html',
  styleUrl: './home-back.component.css'
})
export class HomeBackComponent {

}
