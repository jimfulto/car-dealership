import { EventEmitter, Injectable } from "@angular/core";
import { Car } from "./car.model";

export class CarService {
    carSelected = new EventEmitter<Car>();

    private cars: Car[] = [
        new Car('BMW M3 GTR', 'Need for Speed Best Car', 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'),
        new Car('Mercedez Benz SLR McLaren', 'Easy to control', 'https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'),
        new Car('Aston Martin DB9', 'Cool looking', 'https://images.pexels.com/photos/6476897/pexels-photo-6476897.png?auto=compress&cs=tinysrgb&dpr=1&w=500'),
        new Car('Lamborgini Gallardo', 'Super Speed', 'https://images.pexels.com/photos/6462662/pexels-photo-6462662.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
      ];

    getCars() {
        return this.cars.slice(); //copy of cars array, slice method not original
    }

    //get one specific car for id
    getCar(index: number) {
        return this.cars[index];
    }

}