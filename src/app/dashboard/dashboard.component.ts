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

  message = 'Users Data Selected';

  updateDashboard() {

    if (this.selectedCategory === 'Users') {
      this.message = 'Users Data Selected';
    }
    else if (this.selectedCategory === 'Sales') {
      this.message = 'Sales Data Selected';
    }
    else {
      this.message = 'Orders Data Selected';
    }
  }
}