import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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

  constructor(private carService: CarService, private route: ActivatedRoute, private router: Router) { }

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

  onEditCar() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteCar() {
    this.carService.deleteCar(this.id);
    this.router.navigate(['/cars']);
  }

}
