import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GameplaysRoutingModule } from './gameplays-routing.module';
import { PageGameplaysComponent } from './pages/page-gameplays/page-gameplays.component';
@NgModule({
  declarations: [PageGameplaysComponent],
  imports: [
    CommonModule, GameplaysRoutingModule
  ]
})
export class GameplaysModule { }
