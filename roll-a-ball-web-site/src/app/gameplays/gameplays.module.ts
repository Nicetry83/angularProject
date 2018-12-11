import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FirstGameplayComponent } from './components/first-gameplay/first-gameplay.component';
import { SecondGameplayComponent } from './components/second-gameplay/second-gameplay.component';
import { GameplaysRoutingModule } from './gameplays-routing.module';
import { PageDownloadGameplayComponent } from './pages/page-download-gameplay/page-download-gameplay.component';
import { PageGameplaysComponent } from './pages/page-gameplays/page-gameplays.component';
@NgModule({
  declarations: [PageGameplaysComponent, FirstGameplayComponent, SecondGameplayComponent, PageDownloadGameplayComponent],
  imports: [
    CommonModule, GameplaysRoutingModule, SharedModule
  ]
})
export class GameplaysModule { }
