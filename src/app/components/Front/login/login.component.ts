import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl, ValidationErrors, FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet, Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../services/user.service';
import { MyHttpClientService } from '../../../services/my-http-client.service';
import { User } from '../../../model/user.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HttpClientModule,
     CommonModule,
     FormsModule,
     RouterOutlet,
     RouterLink,
     RouterLinkActive,
     ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  errorMessage: string | null = null;
  passwordFieldType: string = 'password';
  url: string = "";

  constructor(private userService: UserService, private router: Router, private http: MyHttpClientService) { }

  onLogin() {
    this.userService.loginUser(this.email, this.password).subscribe(
      (response: { success: boolean, message?: string }) => {  // Explicitly define the type of response
        if (response.success) {
          this.router.navigate(['/homeBack']); // Navigate to homeBack if login is successful
        } else {
          this.errorMessage = response.message || 'User is not registered';
        }
      },
      (error: any) => {  // Explicitly define the type of error
        console.error('Login error:', error);
        this.errorMessage = 'An error occurred during login';
      }
    );
  }
  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }
  ngOnInit(): void {
    this.http.get('/auth/url').subscribe((data: any) => {
      this.url = data.authURL;
    });
  }
  
 redirectToGoogleAuth() {
  if (this.url) {
    window.location.href = this.url; // Redirect to Google Auth URL
  }
}
}

