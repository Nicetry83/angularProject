import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InProgressRoutingModule } from './in-progress-routing.module';
import { PageInProgressComponent } from './pages/page-in-progress/page-in-progress.component';

@NgModule({
  declarations: [PageInProgressComponent],
  imports: [
    CommonModule, InProgressRoutingModule
  ]
})
export class InProgressModule { }
