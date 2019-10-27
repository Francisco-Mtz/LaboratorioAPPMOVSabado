import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CuentaPage } from './cuenta.page';
import { ModalAddPage } from '../modal-add/modal-add.page';
import { ModalAddPageModule } from '../modal-add/modal-add.module';

const routes: Routes = [
  {
    path: '',
    component: CuentaPage
  }
];

@NgModule({
  entryComponents: [
    ModalAddPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ModalAddPageModule
  ],
  declarations: [CuentaPage]
})
export class CuentaPageModule {}
