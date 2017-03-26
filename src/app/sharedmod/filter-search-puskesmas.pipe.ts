import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filterSearchPuskesmas'
})
export class FilterSearchPuskesmasPipe implements PipeTransform {

  transform(listkontak: any, kata_kunci: any): any {

    if (kata_kunci === undefined) {
      return listkontak;
    }

    return listkontak.filter(
      (itemkontak) => {
        return itemkontak.nama_Puskesmas.toLowerCase().includes(
          kata_kunci.toLowerCase());
      }
    );
  }

}
