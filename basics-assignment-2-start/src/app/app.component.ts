import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  username = '';
  allowClick = false;

  isNotBlank() {
    if (this.username){
      this.allowClick = true;
    }
  }
  clearUsername(){
    this.username = '';
  }
}
