import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GameplaysModule } from '../gameplays/gameplays.module';
import { IdeasModule } from '../ideas/ideas.module';
import { InProgressModule } from '../in-progress/in-progress.module';
import { SharedModule } from '../shared/shared.module';
import { PageWelcomeComponent } from './pages/page-welcome/page-welcome.component';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { PictureGameplaysComponent } from './components/pictures/picture-gameplays/picture-gameplays.component';
import { PictureInProgressComponent } from './components/pictures/picture-in-progress/picture-in-progress.component';
import { PictureIdeasComponent } from './components/pictures/picture-ideas/picture-ideas.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PageWelcomeComponent,
  PictureGameplaysComponent, PictureInProgressComponent, PictureIdeasComponent],
  imports: [
    CommonModule, WelcomeRoutingModule, SharedModule, RouterModule
  ]
})
export class WelcomeModule { }
