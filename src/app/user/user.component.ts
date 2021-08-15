import { Component } from '@angular/core';

@Component({ templateUrl: 'user.component.html' })
export class UserComponent {
  loading = true;

  constructor() {
  }

  ngOnInit() {
    this.loading = true;
  }
}
