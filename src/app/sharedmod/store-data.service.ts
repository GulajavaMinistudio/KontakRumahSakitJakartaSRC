import {Injectable} from '@angular/core';
import {KontakItemPuskesmas} from '../puskesmasjkt/class-datas/kontak-item-puskesmas';
import {KontakItemRSU} from '../rumah-sakit-umum/class-data/kontak-item-rsumum';

@Injectable()
export class StoreDataService {

  private _storeListPuskesmas: KontakItemPuskesmas[] = [];
  private _storeListRSUmum: KontakItemRSU[] = [];
  private _storeListRSKhusus: any = [];

  constructor() {
  }


  getStoreListPuskesmas(): KontakItemPuskesmas[] {
    return this._storeListPuskesmas;
  }

  setStoreListPuskesmas(value: KontakItemPuskesmas[]) {
    this._storeListPuskesmas = value;
  }

  getStoreListRSUmum(): KontakItemRSU[] {
    return this._storeListRSUmum;
  }

  setStoreListRSUmum(value: KontakItemRSU[]) {
    this._storeListRSUmum = value;
  }

  getStoreListRSKhusus(): any {
    return this._storeListRSKhusus;
  }

  setStoreListRSKhusus(value: any) {
    this._storeListRSKhusus = value;
  }
}
