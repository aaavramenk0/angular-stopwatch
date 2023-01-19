import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title = 'stopwatch';
  
  // declaration of seconds (2 digits number)
  sec: any = '0' + 0;
  // declaration of minutes (2 digits number)
  min: any = '0' + 0;

  startTimer: any;
  running = false;

  // Function for the start/stop button
  start(): void {
    
    if(!this.running) {
      this.running = true;
      this.startTimer = setInterval(() => {
        this.sec++;

          // if(this.sec < 10) {
          //   this.sec = '0' + this.sec
          // } else {
          //   this.sec = this.sec;
          // }  
        this.sec = this.sec < 10 ? '0' + this.sec : this.sec

        if(this.sec === 60) {
          this.min++;
          this.min = this.min < 10 ? '0' + this.min : this.min;
          this.sec = '0' + 0;
        }
      }, 1000);
    } else {
      this.stop();
    }
  }

  stop(): void {
    clearInterval(this.startTimer);
    this.running = false;
    this.sec = '0' + 0;
    this.min = '0' + 0;
  }

  reset(): void {
    clearInterval(this.startTimer);
    this.sec = '0' + 0;
    this.min = '0' + 0;
    this.running = false;
  }

  pause(): void {
    
  }
}
