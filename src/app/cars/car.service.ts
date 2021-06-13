import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Car } from "./car.model";

//injectable is used to inject one service into another but in our case we are not doing so can remove it
export class CarService {
    carsChanged = new Subject<Car[]>();
    //initialize with empty array
    private cars: Car[] = [];
    // private cars: Car[] = [
    //     new Car('BMW M3 GTR', 'Need for Speed Best Car', 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'),
    //     new Car('Mercedez Benz SLR McLaren', 'Easy to control', 'https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'),
    //     new Car('Aston Martin DB9', 'Cool looking', 'https://images.pexels.com/photos/6476897/pexels-photo-6476897.png?auto=compress&cs=tinysrgb&dpr=1&w=500'),
    //     new Car('Dodge Viper', 'Fast! Really Fast!', 'https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'),
    //     new Car('Corvette C6', 'Very fast and awesome', 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'),
    //     new Car('Lamborghini Gallardo', 'Super Speed', 'https://images.pexels.com/photos/6462662/pexels-photo-6462662.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
    //   ];

    setCars(cars: Car[]) {
        this.cars = cars;
        this.carsChanged.next(this.cars.slice());
    }

    getCars() {
        return this.cars.slice(); //copy of cars array, slice method not original
    }

    //get one specific car for id
    getCar(index: number) {
        return this.cars[index];
    }

    addCar(car: Car) {
        this.cars.push(car);
        this.carsChanged.next(this.cars.slice());
    }

    updateCar(index: number, newCar:Car) {
        this.cars[index] = newCar;
        this.carsChanged.next(this.cars.slice());
    }

    deleteCar(index: number) {
        this.cars.splice(index, 1);
        this.carsChanged.next(this.cars.slice());
    }

}