import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Angular Project';
  isAuth = false;
  appareil1 = 'Machine à laver';
  appareil2 = 'Frigo';
  appareil3 = 'Ordinateur';
  status1 = 'éteint';
  status2 = 'allumé';

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  onAllumer() {
    console.log('On allume tout !');
  }
}
