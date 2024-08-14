import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl, ValidationErrors, FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet, Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../services/user.service';
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
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string | null = null;
  passwordFieldType: string = 'password';

  constructor(private userService: UserService, private router: Router) { }

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
}

