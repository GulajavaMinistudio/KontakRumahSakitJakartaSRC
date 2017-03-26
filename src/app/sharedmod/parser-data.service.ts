import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {KontakItemPuskesmas, LocationMap} from '../puskesmasjkt/class-datas/kontak-item-puskesmas';
import {KontakItemRSU, LocationRSU} from '../rumah-sakit-umum/class-data/kontak-item-rsumum';
import {Observable} from 'rxjs';
import {KontakItemRSK, LocationRSK} from '../rumah-sakit-khusus/class-datas/kontak-item-rsks';

@Injectable()
export class ParserDataService {

  constructor() {
  }

  // urutkan kontak puskesmas ascending
  // urutkan array secara ascending dengan membandingkan dua parameter
  sortKontakPuskesmasAsc(list: KontakItemPuskesmas[]): any {

    const listSort: KontakItemPuskesmas[] = list;

    try {
      listSort.sort(
        (item1, item2): number => {
          const nama1 = item1.nama_Puskesmas;
          const nama2 = item2.nama_Puskesmas;

          if (nama1 < nama2) {
            return -1;
          }
          if (nama1 > nama2) {
            return 1;
          }
          return 0;
        }
      );
    } catch (e) {
      console.log(e);
    }
    return listSort;
  }

  // urutkan kontak puskesmas ascending
  // urutkan array secara ascending dengan membandingkan dua parameter
  sortKontakRSUAsc(list: KontakItemRSU[]): any {

    const listSort: KontakItemRSU[] = list;

    try {
      listSort.sort(
        (item1, item2): number => {
          const nama1 = item1.jenis_rsu + ' ' + item1.nama_rsu;
          const nama2 = item2.jenis_rsu + ' ' + item2.nama_rsu;

          if (nama1 < nama2) {
            return -1;
          }
          if (nama1 > nama2) {
            return 1;
          }
          return 0;
        }
      );
    } catch (e) {
      console.log(e);
    }
    return listSort;
  }

  // urutkan rumah sakit khusus dari ascending
  // urutkan array secara ascending dengan membandingkan dua parameter
  sortKontakRSKAsc(list: KontakItemRSK[]): any {

    const listSort: KontakItemRSK[] = list;

    try {

      listSort.sort(
        (item1, item2): number => {

          const nama1 = item1.jenis_rsk + ' ' + item1.nama_rsk;
          const nama2 = item2.jenis_rsk + ' ' + item2.nama_rsk;

          if (nama1 < nama2) {
            return -1;
          }
          if (nama1 > nama2) {
            return 1;
          }
          return 0;
        }
      );
    } catch (e) {
      console.log(e);
    }

    return listSort;
  }

  // susun google maps
  public susunLinkGoogleMapsPuskesmas(lokasi: LocationMap): string {

    // http://maps.google.com/?q=<lat>,<lng>
    const latitude = lokasi.latitude;
    const longitude = lokasi.longitude;
    const lokasiGoogleMaps: string = 'http://maps.google.com/?q=' + latitude + ',' + longitude;

    return lokasiGoogleMaps.trim();
  }

  // susun google maps
  public susunLinkGoogleMapsRSU(lokasi: LocationRSU): string {

    // http://maps.google.com/?q=<lat>,<lng>
    const latitude = lokasi.latitude;
    const longitude = lokasi.longitude;
    const lokasiGoogleMaps: string = 'http://maps.google.com/?q=' + latitude + ',' + longitude;

    return lokasiGoogleMaps.trim();
  }

  // susun google maps
  public susunLinkGoogleMapsRSK(lokasi: LocationRSK): string {

    // http://maps.google.com/?q=<lat>,<lng>
    const latitude = lokasi.latitude;
    const longitude = lokasi.longitude;
    const lokasiGoogleMaps: string = 'http://maps.google.com/?q=' + latitude + ',' + longitude;

    return lokasiGoogleMaps.trim();
  }

  // ekstrak data json
  public extractData(res: Response) {
    const body = res.json();
    return body || {};
  }

  // olah data error yang muncul
  public handleErrorMsg(error: Response | any) {

    let errMsg: string;

    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
