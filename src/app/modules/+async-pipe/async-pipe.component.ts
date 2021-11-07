import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.scss']
})
export class AsyncPipeComponent implements OnInit, OnDestroy {
  numberObservable$: Subject<number> = new Subject<number>();
  numberToShow;

  private readonly unsubscribe$ = new Subject<void>();
  private interval;

  ngOnInit(): void {
    this.setIntervalNumberUpdate();
    this.subscribeToNumberChange();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    clearInterval(this.interval);
  }

  private setIntervalNumberUpdate(): void {
    let i = 0;
    this.interval = setInterval(() => this.numberObservable$.next(++i), 1000);
  }

  private subscribeToNumberChange(): void {
    this.numberObservable$.pipe(takeUntil(this.unsubscribe$)).subscribe(value => this.numberToShow = value);
  }

}
