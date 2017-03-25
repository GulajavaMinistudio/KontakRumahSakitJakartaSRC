import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filterSearchKontak'
})
export class FilterSearchKontakPipe implements PipeTransform {

  transform(listkontak: any, kata_kunci: any): any {

    if (kata_kunci === undefined) {
      return listkontak;
    }

    return listkontak.filter(
      (itemkontak) => {
        return itemkontak.nama.toLowerCase().includes(kata_kunci.toLowerCase());
      }
    );
  }

}
