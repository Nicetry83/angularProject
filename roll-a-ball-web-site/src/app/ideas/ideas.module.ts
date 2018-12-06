import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IdeasRoutingModule } from './ideas-routing.module';
import { PageIdeasComponent } from './pages/page-ideas/page-ideas.component';

@NgModule({
  declarations: [PageIdeasComponent],
  imports: [
    CommonModule, IdeasRoutingModule
  ]
})
export class IdeasModule { }
