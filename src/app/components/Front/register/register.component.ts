import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet, Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../services/user.service';

// Custom validator to check if the value contains only string characters
const stringValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const valid = /^[a-zA-Z\s]+$/.test(control.value);
  return valid ? null : { stringOnly: true };
};

// Custom validator to check if the password contains at least one special character
const passwordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const valid = /^(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,16}$/.test(control.value);
  return valid ? null : { password: true };
};

// Custom validator to check if the confirm password matches the password
const confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const parent = control.parent;
  if (!parent) {
    return null;
  }
  const passwordControl = parent.get('password');
  if (!passwordControl) {
    return null;
  }
  const password = passwordControl.value;
  const confirmPassword = control.value;
  return password === confirmPassword ? null : { confirmPassword: true };
};

// Custom validator to check if the zip code is exactly 4 digits
const zipCodeValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const valid = /^\d{4}$/.test(control.value);
  return valid ? null : { zipCode: true };
};

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule // Import CommonModule here
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUserForm: FormGroup;

  constructor(private userService: UserService, private fb: FormBuilder,private router: Router) {
    this.registerUserForm = this.fb.group({
      firstName: [null, [Validators.required, stringValidator]],
      secondName: [null, [Validators.required, stringValidator]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, passwordValidator]],
      confirmPassword: [null, [Validators.required, confirmPasswordValidator]],
      address: [null, [Validators.required, stringValidator]],
      region: [null, [Validators.required, stringValidator]],
      city: ['', Validators.required],
      zipCode: [null, [Validators.required, zipCodeValidator]],
      agreeTerms: [null, [Validators.requiredTrue]]
    });
  }

  ngOnInit(): void {
    // Form initialization logic can be added here if needed
  }

  onSubmit(): void {
    if (this.registerUserForm.valid) {
      this.userService.registerUser(this.registerUserForm.value).subscribe(
        response => {
          console.log('User registered successfully:', response);
          this.router.navigate(['/login']);  // Navigate to login after successful registration
        },
        error => {
          console.error('Registration failed:', error);
        }
      );
    } else {
      console.log('Form is not valid');
    }
  }
}
