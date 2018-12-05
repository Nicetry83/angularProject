import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PictureGameplaysComponent } from './components/picture-gameplays/picture-gameplays.component';
import { GameplaysRoutingModule } from './gameplays-routing.module';
import { PageGameplaysComponent } from './pages/page-gameplays/page-gameplays.component';
@NgModule({
  declarations: [PageGameplaysComponent, PictureGameplaysComponent],
  imports: [
    CommonModule, GameplaysRoutingModule, RouterModule
  ],
  exports: [PictureGameplaysComponent]
})
export class GameplaysModule { }
