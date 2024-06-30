import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjetService } from '../services/projet.service'; 
import { SideNavComponent } from '../side-nav/side-nav.component';

@Component({
  selector: 'app-ajout-projet', 
  standalone: true,
  imports: [SideNavComponent, FormsModule],
  templateUrl: './ajout-projet.component.html',
  styleUrls: ['./ajout-projet.component.css']
})
export class AjoutProjetComponent {
  constructor(private projetService: ProjetService, private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.projetService.ajouterProjet(form.value).subscribe({
        next: (response) => {
          console.log('Projet ajouté avec succès', response);
          // Redirection ou gestion de la réponse ici
          this.router.navigate(['/app-liste-projet']); // Mettez à jour avec le chemin réel
        },
        error: (error) => {
          console.error('Erreur lors de l\'ajout du projet', error);
        }
      });
    }
  }
}