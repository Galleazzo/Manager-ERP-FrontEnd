import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:8080'; 

  constructor(private http: HttpClient, private router: Router) {}

  getAllUsers(): Observable<any[]> {
    return this.http.get(`${this.apiUrl}` + "/users").pipe(
      tap((response: any) => {})
    )
  }

  findUserByUsername(body: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/findByUsername`, body);
  }

  createUser(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}` + "/users", userData);
  }
  
}
