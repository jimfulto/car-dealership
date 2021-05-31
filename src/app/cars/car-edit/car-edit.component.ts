import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {
  id!: number;
  editMode = false;
  carForm!: FormGroup;

  constructor(private route: ActivatedRoute, private carService: CarService) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  private initForm() {
    let carName = '';
    let carImagePath = '';
    let carDescription = '';

    if(this.editMode) {
      const car = this.carService.getCar(this.id);
      carName = car.name;
      carImagePath = car.imagePath;
      carDescription = car.description;
    }

    this.carForm  = new FormGroup({
      'name': new FormControl(carName),
      'imagePath': new FormControl(carImagePath),
      'description': new FormControl(carDescription)
    });
  }

}
