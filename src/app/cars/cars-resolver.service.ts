import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { DataStorageService } from "../shared/data-storage.service";
import { Car } from "./car.model";
import { CarService } from "./car.service";


@Injectable({providedIn: 'root'})
export class CarsResolverService implements Resolve<Car[]>{
    constructor(private dataStorageService: DataStorageService, private carService: CarService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const cars = this.carService.getCars();

        if (cars.length === 0) {
            return this.dataStorageService.fetchCars();
        } else {
            return cars;
        }
        
    }
}