import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { AsideComponent } from "../aside/aside.component";
import { NavBackComponent } from "../nav-back/nav-back.component";
import { FooterBackComponent } from "../footer-back/footer-back.component";
import { SettingsComponent } from "../settings/settings.component";
import { User } from '../../../model/user.model';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,            // Include CommonModule here
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
  selectedUser: User = new User(0, '', '', '', '', '', '', '', '');
  isEditing: boolean = false; // To differentiate between add and edit mode

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe(
      data => {
        console.log(data);  // Log data to check if zipcode is included
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
    this.selectedUser = new User(0, '', '', '', '', '', '', '', '');
    this.isEditing = false;
    // Code to open the modal
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
