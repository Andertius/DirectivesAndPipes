import {Component} from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent {
  showText = true;
  colors = ['mediumpurple', 'cornflowerblue', 'coral'];
  object = 'House';
}
