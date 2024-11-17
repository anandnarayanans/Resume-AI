import { Component } from '@angular/core';

@Component({
  selector: 'app-job-result',
  templateUrl: './job-result.component.html',
  styleUrl: './job-result.component.css',
})
export class JobResultComponent {
  constructor() {}

  navigateBack() {
    // this.location.back(); // Navigates to the previous page
  }
}
