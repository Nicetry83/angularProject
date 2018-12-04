import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { UiComponent } from './containers/ui/ui.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, UiComponent],
  exports: [UiComponent, FooterComponent, HeaderComponent],
  imports: [
    CommonModule, RouterModule
  ],

})
export class UiModule { }
