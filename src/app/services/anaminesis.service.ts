import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AnaminesisService {
  private apiUrl = 'http://localhost:8080'; 

  constructor(private http: HttpClient, private router: Router) {}

  getAllAnaminesis(): Observable<any[]> {
    return this.http.get(`${this.apiUrl}` + "/api/anamnesis").pipe(
      tap((response: any) => {})
    )
  }

  findAnamnesisById(id: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/anamnesis/${id}`);
  }

  createAnaminesis(anamnesis: any): Observable<any> {
    return this.http.post(`${this.apiUrl}` + "/api/anamnesis/", anamnesis);
  }
  
}
