import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AsyncPipeComponent} from './async-pipe.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../../shared/material/material.module';

const routes = [
  {
    path: '',
    component: AsyncPipeComponent,
  }
];

@NgModule({
  declarations: [AsyncPipeComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes), FormsModule, MaterialModule
  ]
})
export class AsyncPipeModule { }
