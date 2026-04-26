import { Component, signal } from '@angular/core';
import { RegisterLogin } from '../register-login';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';




export interface LoginUser {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  imports: [RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {


  

  
  logged = signal<LoginUser>({
    email: '',
    password: ''
  });

  constructor(private registerservcie:RegisterLogin,private router:Router) {}


  onLogin(){
     this.registerservcie.getLogin(this.logged()).subscribe({
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
