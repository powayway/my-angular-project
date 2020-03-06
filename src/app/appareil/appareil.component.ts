import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() index: number;
  @Input() id: number;
  constructor(private appareilService: AppareilService) { }

  ngOnInit(){
  }

  onSwitch() {
    if (this.appareilStatus === 'allumé') {
      this.appareilService.switchOnOne(this.index);
    } else if (this.appareilStatus === 'éteint') {
      this.appareilService.switchOffOne(this.index);

    }
  }
  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if (this.appareilStatus === 'allumé') {
      return 'green';
    } else if (this.appareilStatus === 'éteint') {
      return 'red';
    }
  }
}
