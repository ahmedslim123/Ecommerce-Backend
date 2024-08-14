import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user.model'; // Ensure this is the correct path to your Users model

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = "http://localhost:8080/api/users"; // Ensure this URL matches your backend endpoint
  private userUrl = "http://localhost:8080/api/user";
  private loginUrl = "http://localhost:8080/api/login"; 
  constructor(private http: HttpClient) { }

  registerUser(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, user);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.userUrl, user);
  }

  updateUser(id: number, user: User): Observable<void> {
    return this.http.put<void>(`${this.userUrl}/${id}`, user);
  }

  deleteUser(id: any): Observable<void> {
    return this.http.delete<void>(`${this.userUrl}/${id}`);
  }
  loginUser(email: string, password: string): Observable<{ success: boolean, message?: string }> {
    return this.http.post<{ success: boolean, message?: string }>(this.loginUrl, { email, password });
  }
  
}
