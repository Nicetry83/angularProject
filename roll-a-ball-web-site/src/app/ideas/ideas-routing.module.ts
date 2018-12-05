import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageIdeasComponent } from './pages/page-ideas/page-ideas.component';

const appRoutes: Routes = [
  { path: '', component: PageIdeasComponent },
];
@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes,
    )
  ]
})
export class IdeasRoutingModule { }
