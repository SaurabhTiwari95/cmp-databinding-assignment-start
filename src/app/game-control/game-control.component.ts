import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() IntervalFired = new EventEmitter<number>();
  Interval;
  lastNumber = 0;
  constructor() { }

  ngOnInit() {
  }
  OnStartGame(){
    this.Interval = setInterval(() => {
      /**/
      this.IntervalFired.emit(this.lastNumber + 1);
        this.lastNumber++;
      },1000);
  }/*ES6 error function*/

  OnEndGame(){
    clearInterval(this.Interval);
  }

}
