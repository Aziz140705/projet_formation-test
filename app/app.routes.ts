import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { FormationListComponent } from './components/formation-list/formation-list';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'formations', component: FormationListComponent },
  
  {
    path: 'admin-space', 
    loadComponent: () => import('./admin-temp/admin-temp')
      .then(m => m.AdminTempComponent)
  },
  { path: '**', redirectTo: '' }
];