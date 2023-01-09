import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {
  title: string;

  constructor() {
    this.title = "Hello";
  }

  changeTitle() {
    this.title = "bye Bye";
  }
}
