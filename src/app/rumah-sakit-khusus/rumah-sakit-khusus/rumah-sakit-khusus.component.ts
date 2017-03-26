import {Component, OnDestroy, OnInit} from '@angular/core';
import {KontakItemRSK, KontakRSKObject, LocationRSK} from '../class-datas/kontak-item-rsks';
import {RumahSakitKhususService} from '../services/rumah-sakit-khusus.service';
import {StoreDataService} from '../../sharedmod/store-data.service';
import {ParserDataService} from '../../sharedmod/parser-data.service';
import {WindowGetterService} from '../../sharedmod/window-getter.service';

@Component({
  selector: 'app-rumah-sakit-khusus',
  templateUrl: './rumah-sakit-khusus.component.html',
  styleUrls: ['./rumah-sakit-khusus.component.css']
})
export class RumahSakitKhususComponent implements OnInit, OnDestroy {


  private search_katakunci_rsk = '';
  private listKontakData: KontakItemRSK[] = [];

  private isLoadingBar = false;

  constructor(private httpServ: RumahSakitKhususService,
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

    const listDataStore = this.stores.getStoreListRSKhusus();
    if (listDataStore.length === 0 || listDataStore === undefined ||
      listDataStore === null) {

      this.getDataKontakRSK();
    } else {
      this.listKontakData = listDataStore;
    }

  }


  // ambil data kontak via internet, urutkan ascending, dan simpan ke store
  getDataKontakRSK(): void {

    this.isLoadingBar = true;

    this.httpServ.getDataRumahSakitKhusus()
      .subscribe(
        (hasil: KontakRSKObject) => {

          if (hasil !== undefined) {
            try {
              this.listKontakData = this.parserData.sortKontakRSKAsc(hasil.data);
              this.stores.setStoreListRSKhusus(this.listKontakData);
            } catch (e) {
              this.listKontakData = [];
            }
          } else {
            this.listKontakData = [];
          }

          // hentikan loading bar data
          this.isLoadingBar = false;
        },
        (error) => {
          console.log(error);
          this.listKontakData = [];
          this.isLoadingBar = false;
        },
        () => {
          // tidak melakukan apa apa
        }
      );
  }

  // buka google maps di tab baru
  openGoogleMapsLocation(lokasi: LocationRSK) {

    const lokasiGoogleMaps: string = this.parserData.susunLinkGoogleMapsRSK(lokasi);
    const nativeWindows = this.windowgetter.getWindowInstance();
    nativeWindows.open(lokasiGoogleMaps, '_blank');
  }


}
