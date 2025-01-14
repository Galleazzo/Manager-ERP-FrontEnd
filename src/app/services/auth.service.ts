import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth/login'; 

  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}`, credentials).pipe(
      tap((response: any) => {
        console.log(response);
        
        localStorage.setItem('token', response.token);
        localStorage.setItem("expirationDate", response.expirationDate)
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem("expirationDate")
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expirationDate');
  
    if (!token || !expirationDate) {
      return false;
    }
  
    const expiration = new Date(expirationDate);
    return new Date() < expiration;
  }
  

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
