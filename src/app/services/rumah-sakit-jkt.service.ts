import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import {ParserDataService} from '../sharedmod/parser-data.service';
import {BASE_URLS, DATA_AKSES_API} from '../kontak-akses/kontak-data-akses';
import {Observable} from 'rxjs';

@Injectable()
export class RumahSakitJktService {

  private urlServicePuskesmas = '/puskesmas';
  private urlServiceRumahSakitUmum = '/rumahsakitumum';
  private urlServiceRumahSakitKhusus = '/rumahsakitkhusus';


  constructor(private _http: Http,
              private parserData: ParserDataService) {
  }

  getSemuaKontakRS(): any {

    const headerReq = new Headers();
    headerReq.set('Authorization', DATA_AKSES_API);
    const optionReq = new RequestOptions();
    optionReq.headers = headerReq;

    const urlReqPuskesmas = BASE_URLS + this.urlServicePuskesmas;
    const urlReqRSU = BASE_URLS + this.urlServiceRumahSakitUmum;
    const urlReqRSK = BASE_URLS + this.urlServiceRumahSakitKhusus;

    // let paramsUrls = new URLSearchParams();
    // paramsUrls.set('callback', 'JSONP_CALLBACK');
    // optionReq.params = paramsUrls;

    const observablePuskesmas = this._http.get(urlReqPuskesmas, optionReq)
      .map(this.parserData.extractData)
      .catch(this.parserData.handleErrorMsg);

    const observableRSU = this._http.get(urlReqRSU, optionReq)
      .map(this.parserData.extractData)
      .catch(this.parserData.handleErrorMsg);

    const observableRSK = this._http.get(urlReqRSK, optionReq)
      .map(this.parserData.extractData)
      .catch(this.parserData.handleErrorMsg);

    return Observable.zip(observablePuskesmas, observableRSU, observableRSK)
      .catch(this.parserData.handleErrorMsg);
  }

}
