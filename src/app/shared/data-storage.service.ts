import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CarService } from "../cars/car.service";
import { Car } from "../cars/car.model";
import { tap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(private http: HttpClient, private carService: CarService) {}

    storeCars() {
        const cars = this.carService.getCars();
        this.http
            .put(
                'https://ng-car-default-rtdb.firebaseio.com/cars.json', 
                cars
            )
        .subscribe(response => {
            console.log(response);
        });
    }

    //does not have part or inngredients//session 283
    fetchCars() {
        return this.http
            .get<Car[]>('https://ng-car-default-rtdb.firebaseio.com/cars.json')
                .pipe(tap (cars => {
                    this.carService.setCars(cars);
                }))
    }
}