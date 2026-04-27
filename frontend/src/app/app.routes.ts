import { Routes } from '@angular/router';
import { Register } from './register/register';
import { Login } from './login/login';
import { Home } from './home/home';
import { Book } from './book/book';

export const routes: Routes = [
  { path: '', component: Register },
  { path: 'register', component: Register },
  { path: 'login', component: Login },
  { path: 'home', component: Home },
  {path:'book',component:Book},

  // ✅ Lazy loaded profile
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/profile-routing')
        .then(m => m.PROFILE_ROUTES)
  }
];