import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styles: [
  ]
})
export class Page1Component implements OnInit, OnChanges, DoCheck, 
                                       AfterContentInit, AfterContentChecked, 
                                       AfterViewInit, AfterViewChecked, OnDestroy {
    
  name: string='Erick';
  seconds: number = 0;
  timerSubscription!: Subscription;

  constructor() { 
    console.log('constructor');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.timerSubscription.unsubscribe();
    console.log('timer was cleaned');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    //timerSubscription!: Subscription;
    this.timerSubscription= interval(1000).subscribe(i=> {
      this.seconds=i;
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');  
  } 

  save(){
    console.log('click!');
  }
  
}
