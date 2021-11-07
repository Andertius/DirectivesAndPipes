import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-home-task',
  templateUrl: './home-task.component.html',
  styleUrls: ['./home-task.component.scss']
})
export class HomeTaskComponent {
  @ViewChild('enteredColor') enteredColor;
  @ViewChild('reversedColor') reversedColor;

  color = '89c843';

  mouseEnter(): void {
    if ((/^(?:[0-9a-f]{3}){1,2}$/i.test(this.color))) {
      this.enteredColor.nativeElement.style.color = `#${this.color}`;
    } else {
      this.enteredColor.nativeElement.style.color = 'red';
    }
  }

  mouseLeave(): void {
    this.enteredColor.nativeElement.style.color = 'black';
  }

  mouseEnterReverse(): void {
    if ((/^(?:[0-9a-f]{3}){1,2}$/i.test(this.color))) {
      this.reversedColor.nativeElement.style.color = `#${this.color.split('').reverse().join('')}`;
    } else {
      this.reversedColor.nativeElement.style.color = 'red';
    }
  }

  mouseLeaveReverse(): void {
    this.reversedColor.nativeElement.style.color = 'black';
  }
}
