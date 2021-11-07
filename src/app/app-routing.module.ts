import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: 'attribute-directive',
    loadChildren: () =>
      import('./modules/+attribute-directives/attribute-directives.module').then(module => module.AttributeDirectivesModule)
  },
  {
    path: 'structural-directive',
    loadChildren: () =>
      import('./modules/+structural-directives/structural-directives.module').then(module => module.StructuralDirectivesModule)
  },
  {
    path: 'custom-attribute-directive',
    loadChildren: () => import('./modules/+custom-directives/custom-directives.module')
      .then(module => module.CustomDirectivesModule)
  },
  {
    path: 'built-in-pipes',
    loadChildren: () => import('./modules/+built-in-pipes/built-in-pipes.module').then(module => module.BuiltInPipesModule)
  },
  {
    path: 'custom-pipes',
    loadChildren: () => import('./modules/+custom-pipes/custom-pipes.module').then(module => module.CustomPipesModule)
  },
  {
    path: 'async-pipe',
    loadChildren: () => import('./modules/+async-pipe/async-pipe.module').then(module => module.AsyncPipeModule)
  },
  {
    path: 'home-task',
    loadChildren: () => import('./modules/+home-task/home-task.module').then(module => module.HomeTaskModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
