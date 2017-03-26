import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSearchRsk'
})
export class FilterSearchRskPipe implements PipeTransform {

  transform(listkontak: any, kata_kunci: any): any {

    if (kata_kunci === undefined) {
      return listkontak;
    }

    return listkontak.filter(
      (itemkontak) => {
        return itemkontak.nama_rsk.toLowerCase().includes(
          kata_kunci.toLowerCase());
      }
    );
  }

}
