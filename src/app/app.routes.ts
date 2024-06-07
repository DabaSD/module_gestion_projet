import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ListeRoleComponent } from './role/liste-role/liste-role.component';
import { ProfilRoleComponent } from './role/profil-role/profil-role.component';

export const routes: Routes = [
    { path: 'accueil', component:  AccueilComponent,},
    { path: 'connexion', component:  ConnexionComponent,},
    { path: 'accueil/liste-role', component:  ListeRoleComponent,},
    { path: 'accueil/profil-role', component:  ProfilRoleComponent,},
    { path: '', redirectTo: '/accueil', pathMatch: 'full' }
];
