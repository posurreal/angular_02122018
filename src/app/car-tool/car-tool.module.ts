import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AuthorizationTokenService } from './services/authorization-token.service';
import { CarsService } from './services/cars.service';
import { DemoWebsocketService } from './services/demo-websocket.service';

import { CarHomeComponent } from './components/car-home/car-home.component';
import { ToolHeaderComponent } from './components/tool-header/tool-header.component';
import { ViewCarRowComponent } from './components/view-car-row/view-car-row.component';
import { CarTableComponent } from './components/car-table/car-table.component';
import { EditCarRowComponent } from './components/edit-car-row/edit-car-row.component';
import { CarFormComponent } from './components/car-form/car-form.component';

@NgModule({
  imports: [ CommonModule, ReactiveFormsModule, FormsModule ],
  declarations: [
    CarHomeComponent, ToolHeaderComponent,
    CarFormComponent, CarTableComponent,
    ViewCarRowComponent, EditCarRowComponent,
  ],
  exports: [CarHomeComponent],
  providers: [ AuthorizationTokenService, CarsService, DemoWebsocketService ],
})
export class CarToolModule { }
