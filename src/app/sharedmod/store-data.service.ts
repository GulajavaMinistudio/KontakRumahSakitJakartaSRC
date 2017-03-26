import {Injectable} from '@angular/core';
import {KontakItemPuskesmas} from '../puskesmasjkt/class-datas/kontak-item-puskesmas';
import {KontakItemRSU} from '../rumah-sakit-umum/class-data/kontak-item-rsumum';
import {KontakItemRSK} from '../rumah-sakit-khusus/class-datas/kontak-item-rsks';

@Injectable()
export class StoreDataService {

  private _storeListPuskesmas: KontakItemPuskesmas[] = [];
  private _storeListRSUmum: KontakItemRSU[] = [];
  private _storeListRSKhusus: KontakItemRSK[] = [];

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

  getStoreListRSKhusus(): KontakItemRSK[] {
    return this._storeListRSKhusus;
  }

  setStoreListRSKhusus(value: KontakItemRSK[]) {
    this._storeListRSKhusus = value;
  }
}
