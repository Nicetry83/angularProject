import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderDynamicComponent } from './components/border-dynamic/border-dynamic.component';

@NgModule({
  declarations: [BorderDynamicComponent],
  exports : [BorderDynamicComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
