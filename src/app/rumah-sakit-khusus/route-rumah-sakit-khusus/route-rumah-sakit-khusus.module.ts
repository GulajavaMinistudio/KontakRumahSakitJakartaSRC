import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RumahSakitKhususComponent} from '../rumah-sakit-khusus/rumah-sakit-khusus.component';

const routes: Routes = [
  {path: 'rumah-sakit-khusus', component: RumahSakitKhususComponent}
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RouteRumahSakitKhususModule {
}
