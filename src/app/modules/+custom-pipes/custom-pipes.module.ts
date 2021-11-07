import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomPipesComponent} from './custom-pipes.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../../shared/material/material.module';
import { PlaceholderPipe } from './placeholder.pipe';

const routes = [
  {
    path: '',
    component: CustomPipesComponent,
  }
];

@NgModule({
  declarations: [CustomPipesComponent, PlaceholderPipe],
  imports: [
    CommonModule, RouterModule.forChild(routes), FormsModule, MaterialModule
  ]
})
export class CustomPipesModule { }
