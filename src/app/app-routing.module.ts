import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './cars/car-detail/car-detail.component';
import { CarEditComponent } from './cars/car-edit/car-edit.component';
import { CarStartComponent } from './cars/car-start/car-start.component';
import { CarsResolverService } from './cars/cars-resolver.service';
import { CarsComponent } from './cars/cars.component';
import { SampleComponent } from './sample/sample.component';

const routes: Routes = [
  //commented routes because causing problem in dropdown
  { path: '', redirectTo: '/cars', pathMatch: 'full' },
  { path: 'cars', component: CarsComponent, children: [
    { path: '', component: CarStartComponent},
    { path: 'new', component: CarEditComponent},
    { path: ':id', component: CarDetailComponent, resolve: [CarsResolverService] },
    { path: ':id/edit', component: CarEditComponent, resolve: [CarsResolverService] }
  ] },
  { path: 'sample', component: SampleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
