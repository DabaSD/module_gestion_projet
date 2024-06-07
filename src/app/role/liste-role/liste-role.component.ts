import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SideNavComponent } from '../../side-nav/side-nav.component';

@Component({
  selector: 'app-liste-role',
  standalone: true,
  imports: [SideNavComponent],
  templateUrl: './liste-role.component.html',
  styleUrl: './liste-role.component.css'
})
export class ListeRoleComponent {
  constructor(
    private router: Router
  ) {}
  consulterProfil() {
    // Rediriger vers la page du profil de l'utilisateur
    this.router.navigate(['/accueil/profil-role']);
  }
}
