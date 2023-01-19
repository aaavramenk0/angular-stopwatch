import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'stopwatch';
  sec: any = '0' + 0;
  min: any = '0' + 0;


  ngOnInit() {
    
  }
}
