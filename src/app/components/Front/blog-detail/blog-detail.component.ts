import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { InstagramComponent } from "../instagram/instagram.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [HeaderComponent, InstagramComponent, FooterComponent],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css'
})
export class BlogDetailComponent {

}
