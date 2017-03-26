import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {PuskesmasJakartaComponent} from './puskesmas-jakarta/puskesmas-jakarta.component';
import {PuskesmasServisService} from './services/puskesmas-servis.service';
import {RoutePuskesmasModule} from './route-puskesmas/route-puskesmas.module';
import {SharedModuleAppModule} from '../sharedmod/shared-module-app.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModuleAppModule,
    RoutePuskesmasModule
  ],
  declarations: [PuskesmasJakartaComponent],
  providers: [PuskesmasServisService]
})
export class PuskesmasjktModule {
}
