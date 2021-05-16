import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../../car.model';
import { CarService } from '../../car.service';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.css']
})
export class CarItemComponent implements OnInit {

  // cars: Car[] = [
  //   new Car('BMW M3 GTR', 'Need for Speed Best Car', 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'),
  //   new Car('Mercedez Benz SLR Mclaren', 'Easy to control', 'https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
  // ];

  @Input()
  car!: Car;
  @Input()
  index!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
