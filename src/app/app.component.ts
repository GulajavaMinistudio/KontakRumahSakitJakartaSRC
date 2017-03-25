import {Component, OnDestroy, OnInit} from '@angular/core';
import {RumahSakitJktService} from './services/rumah-sakit-jkt.service';
import {StoreDataService} from './sharedmod/store-data.service';
import {Observable} from 'rxjs';
import {ParserDataService} from './sharedmod/parser-data.service';
import {KontakItemPuskesmas, PuskesmasObject} from './puskesmasjkt/class-datas/kontak-item-puskesmas';
import {KontakItemRSU, KontakRSUObject} from './rumah-sakit-umum/class-data/kontak-item-rsumum';
import {KontakItemRSK, KontakRSKObject} from './rumah-sakit-khusus/class-datas/kontak-item-rsks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  subscribtions: any;
  isLoadingBar = false;

  constructor(private httpServ: RumahSakitJktService,
              private parserData: ParserDataService,
              private stores: StoreDataService) {
  }

  ngOnInit(): void {

    this.getSemuaDataRumahSakitJKT();
  }

  ngOnDestroy(): void {

    if (this.subscribtions !== undefined) {
      this.subscribtions.unsubscribe();
    }
  }

  // ambil semua data rumah sakit dari api server
  getSemuaDataRumahSakitJKT(): void {

    this.showLoadingBar();

    this.httpServ.getSemuaKontakRS()
      .subscribe(
        (hasil) => {

          this.simpanDataStore(hasil);
        },
        (error) => {
          console.log(error);
          this.hideLoadingBar();
        }
      );

  }

  // simpan data ke dalam cache sementara si aplikasi
  simpanDataStore(hasil: any): void {

    const observablesHasil = Observable.of(hasil)
      .map(
        (data) => {

          // simpan data puskesmas
          const dataKontakPuskesmas: PuskesmasObject = data[0];
          const listKontak: KontakItemPuskesmas[] = this.parserData.sortKontakPuskesmasAsc(dataKontakPuskesmas.data);
          this.stores.setStoreListPuskesmas(listKontak);

          return data;
        }
      )
      .map(
        (data) => {

          // simpan data RSU
          const dataKontakRSU: KontakRSUObject = data[1];
          const listKontak: KontakItemRSU[] = this.parserData.sortKontakRSUAsc(dataKontakRSU.data);
          this.stores.setStoreListRSUmum(listKontak);

          return data;
        }
      )
      .map(
        (data) => {

          // simpan data RSK
          const dataKontakRSK: KontakRSKObject = data[2];
          const listKontak: KontakItemRSK[] = this.parserData.sortKontakRSKAsc(dataKontakRSK.data);
          this.stores.setStoreListRSKhusus(listKontak);

          return data;
        }
      )
      .catch(this.parserData.handleErrorMsg);

    this.subscribtions = observablesHasil.subscribe(
      () => {
        // sukses request semua data
        this.hideLoadingBar();
      },
      (error) => {
        console.log(error);
        this.hideLoadingBar();
      }
    );

  }

  // tampil loadingBar
  showLoadingBar(): void {
    this.isLoadingBar = true;
  }

  // sembunyi loading bar
  hideLoadingBar(): void {
    this.isLoadingBar = false;
  }

}
