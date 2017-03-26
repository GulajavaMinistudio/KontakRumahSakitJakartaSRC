import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import {ParserDataService} from '../../sharedmod/parser-data.service';
import {BASE_URLS, DATA_AKSES_API} from '../../kontak-akses/kontak-data-akses';

@Injectable()
export class RumahSakitUmumService {

  // private urlService = '/rumahsakitumum';
  private urlService = '/rsu.json';

  constructor(private _http: Http,
              private parser_data: ParserDataService) {
  }

  getDataRumahSakitUmumJKT(): any {

    const headerReq = new Headers();
    headerReq.set('Authorization', DATA_AKSES_API);

    const optionReq = new RequestOptions();
    optionReq.headers = headerReq;

    const urlReq = BASE_URLS + this.urlService;

    return this._http.get(urlReq, optionReq)
      .map(this.parser_data.extractData)
      .catch(this.parser_data.handleErrorMsg);
  }


}
