import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InProgressRoutingModule } from './in-progress-routing.module';
import { PageInProgressComponent } from './pages/page-in-progress/page-in-progress.component';
import { RouterModule } from '@angular/router';
import { PictureInProgressComponent } from './components/picture-in-progress/picture-in-progress.component';

@NgModule({
  declarations: [PageInProgressComponent, PictureInProgressComponent],
  imports: [
    CommonModule, InProgressRoutingModule, RouterModule
  ],
  exports: [PictureInProgressComponent]
})
export class InProgressModule { }
