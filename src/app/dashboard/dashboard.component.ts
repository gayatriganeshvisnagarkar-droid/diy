import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent {
  users = [
    { id: 1, name: 'Gayatri', city: 'Nagpur' },
    { id: 2, name: 'Rahul', city: 'Pune' },
    { id: 3, name: 'Priya', city: 'Mumbai' }
  ];
}