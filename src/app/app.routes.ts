import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ListeRoleComponent } from './role/liste-role/liste-role.component';
import { ProfilRoleComponent } from './role/profil-role/profil-role.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AjoutProjetComponent } from './ajout-projet/ajout-projet.component';
import { RessourceHumaineComponent } from './ressource-humaine/ressource-humaine.component';

export const routes: Routes = [
    { path: 'accueil', component:  AccueilComponent,},
    { path: 'connexion', component:  ConnexionComponent,},
    { path: 'liste-role', component:  ListeRoleComponent,},
    { path: 'profil-role', component:  ProfilRoleComponent,},
    { path: 'sidenav', component:  SideNavComponent,},
    { path: 'ajoutProjet', component:  AjoutProjetComponent,},
    { path: 'ressourceHumaine', component:  RessourceHumaineComponent,},
    { path: '', redirectTo: '/accueil', pathMatch: 'full' }
];
