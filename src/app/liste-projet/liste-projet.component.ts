import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { ProjetService } from '../services/projet.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { Projet } from '../modèles/projet';

@Component({
  selector: 'app-liste-projet',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive,SideNavComponent, HttpClientModule ],
  templateUrl: './liste-projet.component.html',
  styleUrl: './liste-projet.component.css'
})
export class ListeProjetComponent {
  projets: Projet[] = [];
  constructor(private projetService: ProjetService) { } 

  ngOnInit(): void {
    this.listerProjets();
  }

  listerProjets() {
    this.projetService.listerProjets().subscribe(data => {
      this.projets = data;
    });
  }
}
