import { Component } from '@angular/core';

@Component({ templateUrl: 'product.component.html' })
export class ProductComponent {
  loading = true;

  constructor() {
  }

  ngOnInit() {
    this.loading = true;
  }
}
