import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageInProgressComponent } from './pages/page-in-progress/page-in-progress.component';

const appRoutes: Routes = [
  { path: '', component: PageInProgressComponent },
];
@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes,
    )
  ]
})
export class InProgressRoutingModule { }
