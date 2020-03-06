import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit {

  isAuth = false;

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
    this.appareils = this.appareilService.appareils;
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
}
