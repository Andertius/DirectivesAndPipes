import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BuiltInPipesComponent} from './built-in-pipes.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../../shared/material/material.module';

const routes = [
  {
    path: '',
    component: BuiltInPipesComponent,
  }
];

@NgModule({
  declarations: [BuiltInPipesComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes), FormsModule, MaterialModule
  ]
})
export class BuiltInPipesModule { }
