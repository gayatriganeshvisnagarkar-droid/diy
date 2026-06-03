import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent {

  selectedCategory = 'Users';

  rangeValue = 50;

  searchText = '';

  categories = [
    'Users',
    'Sales',
    'Orders'
  ];

  users = [
    { id: 1, name: 'Gayatri', city: 'Nagpur' },
    { id: 2, name: 'Rahul', city: 'Pune' },
    { id: 3, name: 'Priya', city: 'Mumbai' }
  ];
}