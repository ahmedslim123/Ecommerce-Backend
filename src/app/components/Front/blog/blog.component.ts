import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { InstagramComponent } from "../instagram/instagram.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [HeaderComponent, InstagramComponent, FooterComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

}
