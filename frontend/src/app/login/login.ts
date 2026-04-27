import { Component, computed, signal } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RegisterLogin } from '../register-login';
import { CommonModule } from '@angular/common';
export interface LoginUser {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  imports: [RouterLink,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  logged = signal<LoginUser>({
    email: '',
    password: ''
  });

  constructor(
    private registerService: RegisterLogin,
    private router: Router
  ) {}



  // ✅ login function
  onLogin() {
    this.registerService.getLogin(this.logged()).subscribe({
      next: (data) => {
        console.log('Success', data);
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.log('Error occurred', error);
      }
    });
  }
}