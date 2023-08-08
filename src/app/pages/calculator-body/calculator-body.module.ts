import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalculatorBodyPageRoutingModule } from './calculator-body-routing.module';

import { CalculatorBodyPage } from './calculator-body.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalculatorBodyPageRoutingModule
  ],
  declarations: [CalculatorBodyPage]
})
export class CalculatorBodyPageModule {}
