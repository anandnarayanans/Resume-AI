import { Component } from '@angular/core';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css'],
})
export class JobDetailsComponent {
  constructor() {}

  navigateBack() {
    // this.location.back(); // Navigates to the previous page
  }
}
