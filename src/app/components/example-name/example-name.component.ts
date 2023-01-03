import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-example-name',
  templateUrl: './example-name.component.html',
  styles: [
  ]
})
export class ExampleNameComponent implements OnInit, OnChanges {

  @Input() name!: string;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
  }

}
