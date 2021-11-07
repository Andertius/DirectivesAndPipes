import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeTaskComponent} from './home-task.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../../shared/material/material.module';
import { OnlyAlphanumericsDirective } from './only-alphanumerics.directive';
import { ChangeBackgroundDirective } from './change-background.directive';
import { EnteredColorHoverDirective } from './entered-color-hover.directive';
import { ReversePipe } from './reverse.pipe';

const routes = [
  {
    path: '',
    component: HomeTaskComponent,
  }
];

@NgModule({
  declarations: [HomeTaskComponent, OnlyAlphanumericsDirective, ChangeBackgroundDirective, EnteredColorHoverDirective, ReversePipe],
  imports: [
    CommonModule, RouterModule.forChild(routes), FormsModule, MaterialModule
  ]
})
export class HomeTaskModule {
}
