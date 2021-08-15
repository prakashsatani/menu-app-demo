import { Component } from '@angular/core';

@Component({ templateUrl: 'contact.component.html' })
export class ContactComponent {
  loading = true;

  constructor() {
  }

  ngOnInit() {
    this.loading = true;
  }
}
