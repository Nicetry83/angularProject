import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageGameplaysComponent } from './pages/page-gameplays/page-gameplays.component';

const appRoutes: Routes = [
  { path: '', component: PageGameplaysComponent },
];
@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes,
    )
  ]
})
export class GameplaysRoutingModule { }
