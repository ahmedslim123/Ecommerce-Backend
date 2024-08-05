import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

const BASIC_URL = "http://localhost:8080"; 

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  registerUser(user: any): Observable<any> {
    return this.http.post(BASIC_URL + "/api/user", user);
  }
}
