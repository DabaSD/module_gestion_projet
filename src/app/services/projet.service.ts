import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjetService {
  private apiUrl = 'http://localhost:8081/projet';

  constructor(private http: HttpClient) { }

  listerProjets(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/getAllProjet`);
  }

  ajouterProjet(projet: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/createProjet`, projet);
  }
}