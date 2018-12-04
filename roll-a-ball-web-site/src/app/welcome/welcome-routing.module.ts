import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageWelcomeComponent } from './pages/page-welcome/page-welcome.component';

const appRoutes: Routes = [
  { path: 'welcome', component: PageWelcomeComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes,
    )
  ]
})
export class WelcomeRoutingModule {}
