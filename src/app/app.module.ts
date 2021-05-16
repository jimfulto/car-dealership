import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarsComponent } from './cars/cars.component';
import { CarListComponent } from './cars/car-list/car-list.component';
import { CarDetailComponent } from './cars/car-detail/car-detail.component';
import { CarItemComponent } from './cars/car-list/car-item/car-item.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SampleComponent } from './sample/sample.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { CarStartComponent } from './cars/car-start/car-start.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarsComponent,
    CarListComponent,
    CarDetailComponent,
    CarItemComponent,
    SampleComponent,
    DropdownDirective,
    CarStartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
