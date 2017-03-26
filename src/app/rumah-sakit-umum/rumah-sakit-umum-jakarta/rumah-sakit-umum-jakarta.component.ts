import {Component, OnDestroy, OnInit} from '@angular/core';
import {KontakItemRSU, KontakRSUObject, LocationRSU} from '../class-data/kontak-item-rsumum';
import {RumahSakitUmumService} from '../services/rumah-sakit-umum.service';
import {StoreDataService} from '../../sharedmod/store-data.service';
import {ParserDataService} from '../../sharedmod/parser-data.service';
import {WindowGetterService} from '../../sharedmod/window-getter.service';

@Component({
  selector: 'app-rumah-sakit-umum-jakarta',
  templateUrl: './rumah-sakit-umum-jakarta.component.html',
  styleUrls: ['./rumah-sakit-umum-jakarta.component.css']
})
export class RumahSakitUmumJakartaComponent implements OnInit, OnDestroy {

  private search_katakunci_rsu = '';
  private listKontakData: KontakItemRSU[] = [];

  private isLoadingBar = false;

  constructor(private httpServ: RumahSakitUmumService,
              private stores: StoreDataService,
              private parserData: ParserDataService,
              private windowgetter: WindowGetterService) {
  }

  ngOnInit() {
    this.cekDataKontakStore();
  }

  ngOnDestroy(): void {
    this.isLoadingBar = false;
  }

  // cek status data yang tersimpan di store data sementara
  // jika data tersedia maka ambil dari cache
  cekDataKontakStore(): void {

    const listDataStore = this.stores.getStoreListRSUmum();
    if (listDataStore.length === 0 || listDataStore === undefined ||
      listDataStore === null) {

      this.getDataKontakRSU();
    } else {
      this.listKontakData = listDataStore;
    }
  }

  // ambil data kontak via internet, urutkan ascending, dan simpan ke store
  getDataKontakRSU(): void {

    this.isLoadingBar = true;

    this.httpServ.getDataRumahSakitUmumJKT()
      .subscribe(
        (hasil: KontakRSUObject) => {

          if (hasil !== undefined) {
            try {
              this.listKontakData = this.parserData.sortKontakRSUAsc(hasil.data);
              this.stores.setStoreListRSUmum(this.listKontakData);
            } catch (e) {
              console.log(e);
              this.listKontakData = [];
            }
          } else {
            this.listKontakData = [];
          }

          // hentikan loading bar
          this.isLoadingBar = false;
        },
        (error) => {
          console.log(error);
          this.listKontakData = [];
          this.isLoadingBar = false;
        }
      );
  }


  // buka google maps di tab baru
  openGoogleMapsLocation(lokasi: LocationRSU) {

    const lokasiGoogleMaps: string = this.parserData.susunLinkGoogleMapsRSU(lokasi);
    const nativeWindows = this.windowgetter.getWindowInstance();
    nativeWindows.open(lokasiGoogleMaps, '_blank');
  }

}
