import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './cars/car-detail/car-detail.component';
import { CarStartComponent } from './cars/car-start/car-start.component';
import { CarsComponent } from './cars/cars.component';
import { SampleComponent } from './sample/sample.component';

const routes: Routes = [
  //commented routes because causing problem in dropdown
  { path: '', redirectTo: '/cars', pathMatch: 'full' },
  { path: 'cars', component: CarsComponent, children: [
    { path: '', component: CarStartComponent},
    { path: ':id', component: CarDetailComponent}
  ] },
  { path: 'sample', component: SampleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
