import { Routes } from '@angular/router';
import { Register } from './register/register';
import { Login } from './login/login';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: Register },
  { path: 'register', component: Register },
  { path: 'login', component: Login },
  { path: 'home', component: Home },

  // ✅ Lazy loaded profile
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/profile-routing')
        .then(m => m.PROFILE_ROUTES)
  }
];