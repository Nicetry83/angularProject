import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageGameplaysComponent } from './pages/page-gameplays/page-gameplays.component';
import { PageDownloadGameplayComponent } from './pages/page-download-gameplay/page-download-gameplay.component';

const appRoutes: Routes = [
  { path: '', component: PageGameplaysComponent },
  { path: 'downloadGameplays', component: PageDownloadGameplayComponent },
];
@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes,
    )
  ]
})
export class GameplaysRoutingModule { }
