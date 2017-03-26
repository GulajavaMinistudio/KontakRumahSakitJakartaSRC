import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filterSearchRsu'
})
export class FilterSearchRsuPipe implements PipeTransform {

  transform(listkontak: any, kata_kunci: any): any {

    if (kata_kunci === undefined) {
      return listkontak;
    }

    return listkontak.filter(
      (itemkontak) => {
        return itemkontak.nama_rsu.toLowerCase().includes(
          kata_kunci.toLowerCase());
      }
    );
  }

}
