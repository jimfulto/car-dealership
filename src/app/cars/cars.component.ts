import { Component, OnInit } from '@angular/core';
import { Car } from './car.model';
import { CarService } from './car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
  providers: [CarService]
})
export class CarsComponent implements OnInit {

  selectedCar!: Car;
  
  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.carSelected
      .subscribe(
        (car: Car) => {
          this.selectedCar = car;
        }
      );
  }

}
