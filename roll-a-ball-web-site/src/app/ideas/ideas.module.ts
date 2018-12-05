import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PictureIdeasComponent } from './components/picture-ideas/picture-ideas.component';
import { IdeasRoutingModule } from './ideas-routing.module';
import { PageIdeasComponent } from './pages/page-ideas/page-ideas.component';

@NgModule({
  declarations: [PageIdeasComponent, PictureIdeasComponent],
  imports: [
    CommonModule, IdeasRoutingModule, RouterModule
  ],
  exports: [PictureIdeasComponent]
})
export class IdeasModule { }
