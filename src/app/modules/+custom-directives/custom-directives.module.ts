import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomDirectivesComponent} from './custom-directives.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../../shared/material/material.module';
import { GhostLoadingDirective } from './ghost-loading.directive';
import { HideDirective } from './hide.directive';

const routes = [
  {
    path: '',
    component: CustomDirectivesComponent,
  }
];

@NgModule({
  declarations: [CustomDirectivesComponent, GhostLoadingDirective, HideDirective],
  imports: [
    CommonModule, RouterModule.forChild(routes), FormsModule, MaterialModule
  ]
})
export class CustomDirectivesModule {
}
