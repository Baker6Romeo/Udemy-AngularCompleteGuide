import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  paragraphShown = false;
  buttonClicks = [];

  onToggleDisplay() {
    this.paragraphShown = !this.paragraphShown;
    this.buttonClicks.push(this.buttonClicks.length + 1);
  }
}
