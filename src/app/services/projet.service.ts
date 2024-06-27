import { HttpClient, HttpClientModule} from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjetService {
  private apiUrl = 'http://localhost:8080/projet/getAllProjet';
  
  constructor(private http: HttpClient) { }
  listerProjets(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
