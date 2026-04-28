import { Component, OnInit } from '@angular/core';
import { Sharedservice } from '../services/sharedservice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {states} from '../constants/constant';

@Component({
  selector: 'app-book',
  imports: [CommonModule,FormsModule],
  templateUrl: './book.html',
  styleUrl: './book.css',
})
export class Book implements OnInit {
event:any

  constructor(private sharedservice:Sharedservice,private toastservice:ToastrService){

  }

  statenames= states
  selectedDistricts:any[]=[]

  formData = {
  first_name: '',
  seats: 0,
  email: '',
  gender: '',
  state:'',
  district:''
};


 ngOnInit(): void {
  this.sharedservice.selectedEvent$.subscribe((event) => {
    if (event) {
      this.event = event;
    }
  });
}




submitForm(form: any) {
  if (form.invalid) {
    this.toastservice.error(
      "Please fill all required fields correctly",
      "",
      {
        positionClass: 'toast-top-right',
        timeOut: 3000,
        progressBar: true
      }
    );

    // mark all fields as touched so errors show in UI
    form.control.markAllAsTouched();
    return;
  }

  console.log(this.formData);

  this.sharedservice.saveBooking(this.formData).subscribe((res: any) => {
    console.log("Saved successfully", res);

    this.toastservice.success(
      "Thanks, your form was submitted!",
      "",
      {
        positionClass: 'toast-top-right',
        timeOut: 3000,
        progressBar: true
      }
    );
    form.resetForm()
  });
}




onStateChange(stateName: string) {
  const selectedState = this.statenames.find(s => s.name === stateName);
  this.selectedDistricts = selectedState ? selectedState.districts : [];
  
  // Reset district when state changes
  this.formData.district = '';
}
}
