import { Component, OnInit } from '@angular/core';
import { CarService } from './car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
  // providers: [CarService]
})
export class CarsComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

}
