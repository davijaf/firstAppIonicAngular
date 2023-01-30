import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  message: string = "Hello World!";
  constructor() {}

  messageClickOn(){
    this.message = "Hello dev, you're welcome here!";
  }

}
