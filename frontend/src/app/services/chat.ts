import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Chat {


constructor(private http:HttpClient){
  
}

  sendMessage(message: string) {
  return this.http.post<any>('http://localhost:3000/chat', {
    message
  });
}
}
