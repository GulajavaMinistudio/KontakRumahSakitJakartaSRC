import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HalamanGagalKosongComponent} from './halaman-gagal-kosong/halaman-gagal-kosong.component';
import {TentangAppComponent} from './tentang-app/tentang-app.component';
import {PuskesmasjktModule} from './puskesmasjkt/puskesmasjkt.module';
import {RumahSakitUmumModule} from './rumah-sakit-umum/rumah-sakit-umum.module';
import {RumahSakitKhususModule} from './rumah-sakit-khusus/rumah-sakit-khusus.module';
import {RouteAppKontakModule} from './route-app-kontak/route-app-kontak.module';
import {ParserDataService} from './sharedmod/parser-data.service';
import {StoreDataService} from './sharedmod/store-data.service';
import {WindowGetterService} from './sharedmod/window-getter.service';
import {RumahSakitJktService} from './services/rumah-sakit-jkt.service';

@NgModule({
  declarations: [
    AppComponent,
    HalamanGagalKosongComponent,
    TentangAppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    PuskesmasjktModule,
    RumahSakitUmumModule,
    RumahSakitKhususModule,
    RouteAppKontakModule
  ],
  providers: [
    RumahSakitJktService,
    ParserDataService,
    StoreDataService,
    WindowGetterService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
