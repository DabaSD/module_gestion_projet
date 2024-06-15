import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ListeRoleComponent } from './role/liste-role/liste-role.component';
import { ProfilRoleComponent } from './role/profil-role/profil-role.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ListeProjetComponent } from './liste-projet/liste-projet.component';
import { AjoutProjetComponent } from './ajout-projet/ajout-projet.component';

export const routes: Routes = [
    { path: 'accueil', component:  AccueilComponent,},
    { path: 'connexion', component:  ConnexionComponent,},
    { path: 'accueil/liste-role', component:  ListeRoleComponent,},
    { path: 'accueil/profil-role', component:  ProfilRoleComponent,},
    { path: 'sidenav', component:  SideNavComponent,},
    { path : 'app-liste-projet', component: ListeProjetComponent},
    { path: '', redirectTo: '/connexion', pathMatch: 'full' },
    { path: 'ajoutProjet', component:  AjoutProjetComponent,}
];
