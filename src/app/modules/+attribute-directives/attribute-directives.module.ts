import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AttributeDirectivesComponent} from './attribute-directives.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../../shared/material/material.module';

const routes = [
  {
    path: '',
    component: AttributeDirectivesComponent,
  }
];

@NgModule({
  declarations: [AttributeDirectivesComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes), FormsModule, MaterialModule
  ]
})
export class AttributeDirectivesModule {
}
