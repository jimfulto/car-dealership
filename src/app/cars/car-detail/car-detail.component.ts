import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Car } from '../car.model';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  car!: Car;
  id!: number;

  constructor(private carService: CarService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //2 ways to get the id, this is one
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.car = this.carService.getCar(this.id);
        }
      );
  }

}
