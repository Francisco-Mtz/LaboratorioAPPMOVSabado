import { NgModule , ElementRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ResumenPage } from './resumen.page';
import { ChartsModule } from 'ng2-charts';
import { Chart } from 'chart.js';

const routes: Routes = [
  {
    path: '',
    component: ResumenPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ChartsModule,
    ElementRef
    //Chart
  ],
  declarations: [ResumenPage]
})
export class ResumenPageModule {}
