import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageWelcomeComponent } from './pages/page-welcome/page-welcome.component';
import { WelcomeRoutingModule } from './welcome-routing.module';

@NgModule({
  declarations: [PageWelcomeComponent],
  imports: [
    CommonModule, WelcomeRoutingModule
  ]
})
export class WelcomeModule { }
