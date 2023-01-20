// Imports
import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent{
  // declaration of seconds (2 digits number)
  sec: any = '0' + 0;
  // declaration of minutes (2 digits number)
  min: any = '0' + 0;

  startTimer: any;
  // check if stopwatch is running
  running = false;

  // Function for the start button
  start(): void {
    // if on click button is running do following code
    if(!this.running) {
      this.running = true;
      // start the interval with 1000ms or 1s step
      this.startTimer = setInterval(() => {
        // add 1 second to the counter
        this.sec++;

          // if(this.sec < 10) {
          //   this.sec = '0' + this.sec
          // } else {
          //   this.sec = this.sec;
          // } 
          // for visual output mm:ss  :
          // if second < 10 => output 0 + second
          // if second > 10 => output second 
        this.sec = this.sec < 10 ? '0' + this.sec : this.sec

        // if interval came to 60 seconds = 1 minute
        if(this.sec === 60) {
          // add 1 minute to the stopwatch
          this.min++;
          // for visual output mm:ss  :
          // if minute < 10 => output 0 + minute
          // if minute > 10 => output minute 
          this.min = this.min < 10 ? '0' + this.min : this.min;
          // set the values of the seconds equal to 00
          this.sec = '0' + 0;
        }
      }, 1000);
    } else {
      // in other cases call stop function
      this.stop();
    }
  }

  // Function for the start button
  stop(): void {
    // clear the interval
    clearInterval(this.startTimer);
    // set the state of stopwatch to false = not running
    this.running = false;
    // set zero values for the stopwatch
    this.sec = '0' + 0;
    this.min = '0' + 0;
  }
  // Function for the reset button
  reset(): void {
    // clear the interval
    clearInterval(this.startTimer);
    // set zero values for the stopwatch
    this.sec = '0' + 0;
    this.min = '0' + 0;
    // set the state of stopwatch to false = not running
    this.running = false;
    // call of start function for starting stopwatch again
    this.start()
  }

  // Function for the pause button
  pause(): void {
    
  }
}
  /*
  
  */