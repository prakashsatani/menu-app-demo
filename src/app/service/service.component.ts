import { Component } from '@angular/core';

@Component({ templateUrl: 'service.component.html' })
export class ServiceComponent {
  loading = true;

  constructor() {
  }

  ngOnInit() {
    this.loading = true;
  }
}
