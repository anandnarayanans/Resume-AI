import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { JobDetailsComponent } from './job-details/job-details.component';
import { JobResultComponent } from './job-result/job-result.component';
import { JobListComponent } from './job-list/job-list.component';

@NgModule({
  declarations: [
    AppComponent, // Root component
    JobDetailsComponent, JobResultComponent, JobListComponent, // Other components
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Essential module for running the app in a browser
  ],
  providers: [], // Services (if any)
  bootstrap: [AppComponent], // Entry point
})
export class AppModule {}
