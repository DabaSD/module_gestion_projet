import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ListeRoleComponent } from './role/liste-role/liste-role.component';
import { ProfilRoleComponent } from './role/profil-role/profil-role.component';
import { SideNavComponent } from './side-nav/side-nav.component';

export const routes: Routes = [
    { path: 'accueil', component:  AccueilComponent,},
    { path: 'connexion', component:  ConnexionComponent,},
    { path: 'accueil/liste-role', component:  ListeRoleComponent,},
    { path: 'accueil/profil-role', component:  ProfilRoleComponent,},
    { path: 'sidenav', component:  SideNavComponent,},
    { path: '', redirectTo: '/accueil', pathMatch: 'full' }
];
