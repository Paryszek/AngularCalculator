import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  valueHolder = 0

  numberClicked(number) {
    console.log(`${number} button clicked`)
  }

  addClicked() {
    console.log(`add button clicked`)
  }

  subClicked() {
    console.log(`sub button clicked`)
  }

  equalClicked() {
    console.log(`equal button clicked`)
  }
}
