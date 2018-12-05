import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GameplaysModule } from '../gameplays/gameplays.module';
import { IdeasModule } from '../ideas/ideas.module';
import { InProgressModule } from '../in-progress/in-progress.module';
import { SharedModule } from '../shared/shared.module';
import { PageWelcomeComponent } from './pages/page-welcome/page-welcome.component';
import { WelcomeRoutingModule } from './welcome-routing.module';

@NgModule({
  declarations: [PageWelcomeComponent],
  imports: [
    CommonModule, WelcomeRoutingModule, SharedModule,
    GameplaysModule, InProgressModule, IdeasModule
  ]
})
export class WelcomeModule { }
