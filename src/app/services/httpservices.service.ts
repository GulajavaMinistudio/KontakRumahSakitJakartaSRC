import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';

@Injectable()
export class HttpservicesService {

  private urlDarurat = '/assets/data/darurat.json';
  private urlRumahSakit = '/assets/data/rumahsakit.json';
  private urlPelayananMasy = '/assets/data/pelayananmasyarakat.json';
  private urlTransportasi = '/assets/data/transportasi.json';

  private headerTipeJson = 'application/json';

  constructor(private _http: Http) {
  }

  // ambil daftar nomor darurat dari server
  getDataDarurat(): any {

    const headersReq = new Headers();
    headersReq.set('Content-Type', this.headerTipeJson);

    const optionsReq = new RequestOptions();
    optionsReq.headers = headersReq;

    return this._http.get(this.urlDarurat, optionsReq)
      .map(this.extractData)
      .catch(this.handleErrorMsg);
  }


  // ambil daftar rumah sakit medis
  getDaftarRumahSakit(): any {

    const headersReq = new Headers({'Content-Type': this.headerTipeJson});
    const optionsReq = new RequestOptions({headers: headersReq});

    return this._http.get(this.urlRumahSakit, optionsReq)
      .map(this.extractData)
      .catch(this.handleErrorMsg);
  }

  // ambil daftar nomor pelayanan masyarakat
  getDaftarPelayananMasyarakat(): any {

    const headersReq = new Headers({'Content-Type': this.headerTipeJson});
    const optionsReq = new RequestOptions({headers: headersReq});

    return this._http.get(this.urlPelayananMasy, optionsReq)
      .map(this.extractData)
      .catch(this.handleErrorMsg);
  }

  // ambil daftar nomor telepon transportasi
  getDaftarTransportasi(): any {

    const headersReq = new Headers({'Content-Type': this.headerTipeJson});
    const optionsReq = new RequestOptions({headers: headersReq});

    return this._http.get(this.urlTransportasi, optionsReq)
      .map(this.extractData)
      .catch(this.handleErrorMsg);
  }


  // fungsi untuk mengambil semua request yang sama di halaman home saat pertama kali dibuka
  getSemuaDataTelepon(): any {

    const headersReq = new Headers({'Content-Type': this.headerTipeJson});
    const optionsReq = new RequestOptions({headers: headersReq});

    const observableDarurat = this._http.get(this.urlDarurat, optionsReq)
      .map(this.extractData);

    const observableRumahSakit = this._http.get(this.urlRumahSakit, optionsReq)
      .map(this.extractData);

    const observableLayananMasy = this._http.get(this.urlPelayananMasy, optionsReq)
      .map(this.extractData);

    const observableTransportasi = this._http.get(this.urlTransportasi, optionsReq)
      .map(this.extractData);

    return Observable.zip(observableDarurat, observableRumahSakit,
      observableLayananMasy, observableTransportasi)
      .catch(this.handleErrorMsg);
  }


  // ekstrak data json
  private extractData(res: Response) {
    const body = res.json();
    return body.data || {};
  }

  // olah data error yang muncul
  private handleErrorMsg(error: Response | any) {

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
