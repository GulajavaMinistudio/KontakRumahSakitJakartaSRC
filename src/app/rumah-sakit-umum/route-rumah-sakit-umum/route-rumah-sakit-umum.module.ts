import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RumahSakitUmumJakartaComponent} from '../rumah-sakit-umum-jakarta/rumah-sakit-umum-jakarta.component';

const routes: Routes = [
  {path: 'rumah-sakit-umum', component: RumahSakitUmumJakartaComponent}
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
export class RouteRumahSakitUmumModule {
}
