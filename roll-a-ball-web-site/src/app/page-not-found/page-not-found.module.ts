import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundRoutingModule } from './page-not-found-routing.module';
import { PagePageNotFoundComponent } from './pages/page-page-not-found/page-page-not-found.component';

@NgModule({
  declarations: [PagePageNotFoundComponent],
  imports: [
    CommonModule, PageNotFoundRoutingModule
  ]
})
export class PageNotFoundModule { }
