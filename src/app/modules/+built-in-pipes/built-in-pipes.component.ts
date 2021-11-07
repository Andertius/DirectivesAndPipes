import {Component} from '@angular/core';

@Component({
  selector: 'app-built-in-pipes',
  templateUrl: './built-in-pipes.component.html',
  styleUrls: ['./built-in-pipes.component.scss']
})
export class BuiltInPipesComponent {
  todayDate = new Date();
  money = 100;
}
