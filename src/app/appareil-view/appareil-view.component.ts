import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppareilService } from '../appareil.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit, OnDestroy {

  isAuth = false;
  appareil: any[];
  appareilSubscription: Subscription;

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  appareils: any[];

  constructor(private appareilService: AppareilService) { }

  ngOnInit() {
    this.appareilSubscription = this.appareilService.appareilsSubject.subscribe(
      (appareil: any[]) => {
        this.appareils = appareil;
      }
    );
    this.appareilService.emitAppareilSubject();
  }

  onAllumer() {
    this.appareilService.switchOnAll;
  }

  onEteindre() {
    if (confirm('Etes-vous sur de vouloir tout éteindre?')) {
      this.appareilService.switchOffAll;
    } else {
      return null;
    }

  }

  ngOnDestroy() {
    this.appareilSubscription.unsubscribe();
  }
}
