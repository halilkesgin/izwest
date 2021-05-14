import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../dfolder/logging.service';

@Component({
  selector: 'logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css']
})
export class LoggingComponent implements OnInit {

  constructor(public loggingService: LoggingService) { }

  ngOnInit(): void {
  }

}
