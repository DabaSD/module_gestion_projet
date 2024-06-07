import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { SideNavComponent } from './side-nav/side-nav.component';

export const routes: Routes = [
    { path: 'accueil', component:  AccueilComponent,},
    { path: 'connexion', component:  ConnexionComponent,},
    { path: 'sidenav', component:  SideNavComponent,},
    { path: '', redirectTo: '/accueil', pathMatch: 'full' }
];
