import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StructuralDirectivesComponent} from './structural-directives.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../../shared/material/material.module';

const routes = [
  {
    path: '',
    component: StructuralDirectivesComponent,
  }
];

@NgModule({
  declarations: [StructuralDirectivesComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes), FormsModule, MaterialModule
  ]
})
export class StructuralDirectivesModule {
}
