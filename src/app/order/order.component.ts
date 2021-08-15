import { Component } from '@angular/core';

@Component({ templateUrl: 'order.component.html' })
export class OrderComponent {
  loading = true;

  constructor() {
  }

  ngOnInit() {
    this.loading = true;
  }
}
