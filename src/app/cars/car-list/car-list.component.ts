import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../car.model';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars!: Car[];

  constructor(private carService: CarService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.cars = this.carService.getCars();
  }

  onNewCar() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
