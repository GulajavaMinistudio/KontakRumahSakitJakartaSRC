import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'susunTelepon'
})
export class SusunTeleponPipe implements PipeTransform {

  stringTelponGabung = '';

  transform(listTelpon: any[], args?: any): any {

    const panjangData: number = listTelpon.length;
    this.stringTelponGabung = '';

    if (panjangData === 0) {
      this.stringTelponGabung = 'nomor telepon belum tersedia';
    }

    try {
      for (let i = 0; i < panjangData; i++) {

        if (i === 0) {
          this.stringTelponGabung = this.stringTelponGabung + listTelpon[i].trim();
        }

        if (i > 0) {
          this.stringTelponGabung = this.stringTelponGabung + ' ; ' + listTelpon[i].trim();
        }
      }
    } catch (e) {
      this.stringTelponGabung = '';
    }

    if (this.stringTelponGabung.length < 1) {
      this.stringTelponGabung = 'nomor telepon belum tersedia';
    }

    return this.stringTelponGabung;
  }

}
