import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadComponent } from './components/download/download.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DownloadComponent],
  exports : [DownloadComponent],
  imports: [
    CommonModule, FontAwesomeModule, RouterModule,
  ]
})
export class SharedModule { }
