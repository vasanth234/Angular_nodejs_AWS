import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterPipePipe } from '../filter-pipe-pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, FilterPipePipe, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  searchText: string = '';

  events = [
    {
      title: 'Coldplay Live',
      location: 'Mumbai',
      date: 'May 2026',
      image: 'https://picsum.photos/800/500?random=1'
    },
    {
      title: 'Avengers Re-run',
      location: 'Delhi',
      date: 'April 2026',
      image: 'https://picsum.photos/800/500?random=2'
    },
    {
      title: 'Drama Night',
      location: 'Bangalore',
      date: 'June 2026',
      image: 'https://picsum.photos/800/500?random=3'
    },
    {
      title: 'EDM Festival',
      location: 'Goa',
      date: 'July 2026',
      image: 'https://picsum.photos/800/500?random=4'
    }
  ];

  bookEvent(event: any) {
    console.log('Booking:', event);
  }
}