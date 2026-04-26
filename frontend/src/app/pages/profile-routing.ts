import { Routes } from '@angular/router';
import { Profile } from './profile/profile';
import { Dashboard } from './dashboard/dashboard';
import { Settings } from './settings/settings';

export const PROFILE_ROUTES: Routes = [
  {
    path: '',
    component: Profile,
    children: [
      { path: 'dashboard', component: Dashboard },
      { path: 'settings', component: Settings },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];