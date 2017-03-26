import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PuskesmasJakartaComponent} from '../puskesmas-jakarta/puskesmas-jakarta.component';

const routes: Routes = [
  {path: 'puskesmas', component: PuskesmasJakartaComponent}
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutePuskesmasModule {
}
