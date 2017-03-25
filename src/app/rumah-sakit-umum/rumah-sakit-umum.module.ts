import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RumahSakitUmumService} from './services/rumah-sakit-umum.service';
import {RumahSakitUmumJakartaComponent} from './rumah-sakit-umum-jakarta/rumah-sakit-umum-jakarta.component';
import {FormsModule} from '@angular/forms';
import {SharedModuleAppModule} from '../sharedmod/shared-module-app.module';
import {RouteRumahSakitUmumModule} from './route-rumah-sakit-umum/route-rumah-sakit-umum.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModuleAppModule,
    RouteRumahSakitUmumModule
  ],
  declarations: [RumahSakitUmumJakartaComponent],
  providers: [RumahSakitUmumService]
})
export class RumahSakitUmumModule {
}
