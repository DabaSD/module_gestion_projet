import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ListeRoleComponent } from './role/liste-role/liste-role.component';
import { ProfilRoleComponent } from './role/profil-role/profil-role.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ListeProjetComponent } from './liste-projet/liste-projet.component';
import { AjoutProjetComponent } from './ajout-projet/ajout-projet.component';
import { ConfigurationPageComponent } from './configuration-page/configuration-page.component';
import { RessourceHumaineComponent } from './ressource-humaine/ressource-humaine.component';

export const routes: Routes = [
    { path: 'accueil', component:  AccueilComponent,},
    { path: 'connexion', component:  ConnexionComponent,},
    { path: 'liste-role', component:  ListeRoleComponent,},
    { path: 'profil-role', component:  ProfilRoleComponent,},
    { path: 'sidenav', component:  SideNavComponent,},
<<<<<<< HEAD
    { path: 'ajoutProjet', component:  AjoutProjetComponent,},
    { path: 'configuration-page', component:  ConfigurationPageComponent,},
    { path: 'ressourceHumaine', component:  RessourceHumaineComponent,},
    { path: '', redirectTo: '/accueil', pathMatch: 'full' }
=======
    { path : 'app-liste-projet', component: ListeProjetComponent},
    { path: '', redirectTo: '/connexion', pathMatch: 'full' },
    { path: 'ajoutProjet', component:  AjoutProjetComponent,}
>>>>>>> origin/ajout_projet
];
