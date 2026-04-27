import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RegisterLogin {
  
  
  constructor(private http: HttpClient) {}

    // 👇 store logged-in user globally
  currentUser = signal<{ name: string } | null>(null);


  getRegister(user: any) {
    return this.http.post(
      `${environment.apiUrl}/register`,
      user,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }

  // ✅ FIXED method name + type
  setUser(user: { name: string }) {
    this.currentUser.set(user);
  }

getLogin(data: any) {
  return this.http.post(`${environment.apiUrl}/applog`, data);
}
}
