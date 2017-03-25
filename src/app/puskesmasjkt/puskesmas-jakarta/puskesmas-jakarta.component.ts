import {Component, OnDestroy, OnInit} from '@angular/core';
import {PuskesmasServisService} from '../services/puskesmas-servis.service';
import {StoreDataService} from '../../sharedmod/store-data.service';
import {ParserDataService} from '../../sharedmod/parser-data.service';
import {KontakItemPuskesmas, LocationMap, PuskesmasObject} from '../class-datas/kontak-item-puskesmas';
import {WindowGetterService} from '../../sharedmod/window-getter.service';

@Component({
  selector: 'app-puskesmas-jakarta',
  templateUrl: './puskesmas-jakarta.component.html',
  styleUrls: ['./puskesmas-jakarta.component.css']
})
export class PuskesmasJakartaComponent implements OnInit, OnDestroy {

  private search_katakunci = '';
  private listKontakData: KontakItemPuskesmas[] = [];

  private isLoadingBar = false;

  constructor(private httpServ: PuskesmasServisService,
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

    const listDataStore = this.stores.getStoreListPuskesmas();
    if (listDataStore.length === 0 || listDataStore === undefined ||
      listDataStore === null) {

      this.getDataKontakPuskesmas();
    } else {
      this.listKontakData = listDataStore;
    }
  }

  // ambil data kontak via internet, urutkan ascending, dan simpan ke store
  getDataKontakPuskesmas(): void {

    this.isLoadingBar = true;

    this.httpServ.getDataPuskesmasJKT()
      .subscribe(
        (hasil: PuskesmasObject) => {

          if (hasil !== undefined) {

            try {
              this.listKontakData = this.parserData.sortKontakPuskesmasAsc(hasil.data);
              this.stores.setStoreListPuskesmas(this.listKontakData);
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
  openGoogleMapsLocation(lokasi: LocationMap) {

    const lokasiGoogleMaps: string = this.parserData.susunLinkGoogleMapsPuskesmas(lokasi);
    const nativeWindows = this.windowgetter.getWindowInstance();
    nativeWindows.open(lokasiGoogleMaps, '_blank');
  }

}
