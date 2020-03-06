import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'My Angular Project';
  isAuth = false;
  secondes: number;
  counterSubscription: Subscription;

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  ngOnInit() {
    const counter = Observable.interval(1000);

    this.counterSubscription = counter.subscribe(
      (value) => {
        this.secondes = value;
      },
      (error) => {
        console.log('Uh-oh, an error occured! : ' + error);
      },
      () => {
        console.log('Obervable complete!');
      }

    );
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }

 
}
