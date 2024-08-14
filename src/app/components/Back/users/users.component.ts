import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { AsideComponent } from "../aside/aside.component";
import { NavBackComponent } from "../nav-back/nav-back.component";
import { FooterBackComponent } from "../footer-back/footer-back.component";
import { SettingsComponent } from "../settings/settings.component";
import { User } from '../../../model/user.model';
import { UserService } from '../../../services/user.service';
import {ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';

declare var window: any;
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,  
    FormsModule,
    ReactiveFormsModule,          
    AsideComponent, 
    NavBackComponent, 
    FooterBackComponent, 
    SettingsComponent
  ],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  addUserForm!: FormGroup;  // Use definite assignment assertion
  addUserModal: any;
  selectedUser: User = new User(0, '', '', '', '', '', '', '', '');
  isEditing: boolean = false; // To differentiate between add and edit mode

  constructor(private userService: UserService, private fb: FormBuilder) { }

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.addUserModal = new window.bootstrap.Modal(document.getElementById('addUserModal'));
    }
    this.loadUsers();
    this.initializeForm();  // Initialize the form here
  }
  // Initialize the form with the required fields
  initializeForm() {
    this.addUserForm = this.fb.group({
      firstName: ['', Validators.required],
      secondName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      region: ['', Validators.required],
      city: ['', Validators.required],
      zipCode: ['', Validators.required]
    });
  }

  loadUsers() {
    this.userService.getUsers().subscribe(
      data => {
        //console.log(data);  // Log data to check if zipcode is included
        this.users = data;
      },
      error => {
        console.error('Error loading users!', error);
      }
    );
}
  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(
      () => {
        this.loadUsers();
      },
      error => {
        console.error('Error deleting user!', error);
      }
    );
  }

  openAddUserModal() {
    this.addUserForm.reset(); // Reset the form before opening the modal
    this.addUserModal.show(); // Show the modal
  }

  onSubmitAddUser() {
    if (this.addUserForm.valid) {
      this.userService.addUser(this.addUserForm.value).subscribe(user => {
        this.users.push(user); // Add the new user to the list
        this.addUserModal.hide(); // Hide the modal
      });
    }
  }
  editField(user: User, field: keyof User) {
    user[`editing${this.capitalize(field as string)}`] = true;
  }
  saveField(user: User, field: keyof User) {
    user[`editing${this.capitalize(field as string)}`] = false;
    this.userService.updateUser(user.id, user).subscribe(
      () => {
        console.log(`${field} updated successfully!`);
      },
      error => {
        console.error(`Error updating ${field}!`, error);
      }
    );
  }

  capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  openEditUserModal(user: User) {
    this.selectedUser = { ...user };  // Copy the selected user to the form
    this.isEditing = true;
    // Code to open the modal
  }

  saveUser() {
    if (this.isEditing) {
      this.userService.updateUser(this.selectedUser.id, this.selectedUser).subscribe(
        () => {
          this.loadUsers();
          this.resetForm();
        },
        error => {
          console.error('Error updating user!', error);
        }
      );
    } else {
      this.userService.addUser(this.selectedUser).subscribe(
        () => {
          this.loadUsers();
          this.resetForm();
        },
        error => {
          console.error('Error adding user!', error);
        }
      );
    }
  }

  resetForm() {
    this.selectedUser = new User(0, '', '', '', '', '', '', '', '');
    this.isEditing = false;
  }
}
