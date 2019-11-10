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
  /*
    We could use normal function but then we have to bind this
    to get the correct reference.
  */

  OnEndGame(){
    clearInterval(this.Interval);
  }

}
