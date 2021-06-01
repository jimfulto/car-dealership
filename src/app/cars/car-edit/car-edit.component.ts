import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
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

  constructor(private route: ActivatedRoute, 
              private carService: CarService,
              private router: Router) { 

  }

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

  onSubmit() {
    // const newCar = new Car(
    //   this.carForm.value['name'], 
    //   this.carForm.value['description'],
    //   this.carForm.value['imagePath']
    //   );
    if(this.editMode) {
      this.carService.updateCar(this.id, this.carForm.value);
    } else {
      this.carService.addCar(this.carForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
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
      'name': new FormControl(carName, Validators.required),
      'imagePath': new FormControl(carImagePath, Validators.required),
      'description': new FormControl(carDescription, Validators.required)
    });
  }

}
