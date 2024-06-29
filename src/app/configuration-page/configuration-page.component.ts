import { Component } from '@angular/core';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-configuration-page',
    standalone: true,
    templateUrl: './configuration-page.component.html',
    styleUrl: './configuration-page.component.css',
    imports: [SideNavComponent, FormsModule, CommonModule]
})
export class ConfigurationPageComponent {
  // Tableau pour stocker les groupes de champs
  champs: { firstName: string, email: string, phone: string, organization: string }[] = [];
  forms: { email: string, statut: string, role: string }[] = [];


  // Méthode pour ajouter un nouveau groupe de champs
  ajoutChamp() {
    this.champs.push({
      firstName: '',
      email: '',
      phone: '',
      organization: ''
    });
  }
  ajoutChamps() {
    this.forms.push({
      email: '',
      statut: '',
      role: ''
    });
  }
}
