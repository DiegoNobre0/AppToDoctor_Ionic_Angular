import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalculatorBodyPage } from './calculator-body.page';

const routes: Routes = [
  {
    path: '',
    component: CalculatorBodyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalculatorBodyPageRoutingModule {}
