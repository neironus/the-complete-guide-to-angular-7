import {Component, OnInit} from '@angular/core';

@Component ({
  selector: 'aler-app',
  template: `
    <h1>Alert!!!</h1>
  `,
  styles: [`
    h1 {
      padding: 15px;
      color: red;
      border: 1px solid red;
    }`]
})

export class AlertAppComponent implements OnInit {
  constructor() {}

  ngOnInit() {

  }
}
