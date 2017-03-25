import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {SharedModuleAppModule} from "../sharedmod/shared-module-app.module";
import { RumahSakitKhususComponent } from './rumah-sakit-khusus/rumah-sakit-khusus.component';
import {RumahSakitKhususService} from "./services/rumah-sakit-khusus.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModuleAppModule
  ],
  declarations: [RumahSakitKhususComponent],
  providers: [RumahSakitKhususService]
})
export class RumahSakitKhususModule {
}
