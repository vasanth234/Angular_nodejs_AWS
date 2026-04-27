import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Sharedservice {

  constructor(private http:HttpClient){

  }


private selectedEvent = new BehaviorSubject<any | null>(null);
selectedEvent$ = this.selectedEvent.asObservable();

setEvent(event: any) {
  this.selectedEvent.next(event);
}

saveBooking(formData:any){
 return this.http.post('http://localhost:3000/book',formData)

}


}
