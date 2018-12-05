import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, Router } from '@angular/router';

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  {
    path: 'gameplays',
    loadChildren: './gameplays/gameplays.module#GameplaysModule',
  },
  {
    path: 'in-progress',
    loadChildren: './in-progress/in-progress.module#InProgressModule',
  },
  {
    path: 'ideas',
    loadChildren: './ideas/ideas.module#IdeasModule',
  },
  {
    path: '**',
    loadChildren: './page-not-found/page-not-found.module#PageNotFoundModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(
    appRoutes,
    {
      enableTracing: false,  // <-- debugging purposes only
      preloadingStrategy: PreloadAllModules
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {
      // Diagnostic only: inspect router configuration
      constructor(router: Router) {
        // Use a custom replacer to display function names in the route configs
        const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

        console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
      }
}
