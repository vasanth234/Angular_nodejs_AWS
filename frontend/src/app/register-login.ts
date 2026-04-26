import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterLogin {
  
  
  constructor(private http: HttpClient) {}


  getRegister(user: any) {
    return this.http.post(
      'http://localhost:3004/register',
      user,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }

  getLogin(data:any):Observable<any>{
    return this.http.post("http://localhost:3004/login",data)
  }
}
