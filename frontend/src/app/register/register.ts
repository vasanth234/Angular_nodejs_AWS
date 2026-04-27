import { Component, signal } from '@angular/core';
import { RegisterLogin } from '../register-login';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';


export interface User {
   name: string;
  email: string;
  password: string;
}


@Component({
  selector: 'app-register',
  imports: [RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {



  
  
  user = signal<User>({
    name: '',
  email: '',
  password: ''
  });



  constructor(private registerservcie:RegisterLogin,private router:Router) {}
onRegister() {
  this.registerservcie.getRegister(this.user()).subscribe({
    next: (data: any) => {
      console.log('Success', data);

      if (data.message === 'User registered successfully') {
        console.log('Navigating to home...');

        // ✅ FIXED
        this.registerservcie.setUser({
          name: this.user().name
        });

        this.router.navigate(['/home']);
      }
    },
    error: (error) => {
      console.log('Error occurred', error);
    }
  });
}
}
