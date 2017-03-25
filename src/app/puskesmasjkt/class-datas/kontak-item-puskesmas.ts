/**
 * Created by kucingmint on 3/22/17.
 */

export class LocationMap {

  public alamat: string;
  public latitude: number;
  public longitude: number;

  constructor(alamat: string, latitude: number, longitude: number) {
    this.alamat = alamat;
    this.latitude = latitude;
    this.longitude = longitude;
  }
}

export class KontakItemPuskesmas {

  public id: number;
  public nama_Puskesmas: string;
  public location: LocationMap;
  public telepon: string[];
  public faximile: string[];
  public email: string;
  public kepala_puskesmas: string;
  public kode_kota: number;
  public kode_kecamatan: number;
  public kode_kelurahan: number;


  constructor(id: number, nama_Puskesmas: string, location: LocationMap,
              telepon: string[], faximile: string[], email: string, kepala_puskesmas: string, kode_kota: number,
              kode_kecamatan: number, kode_kelurahan: number) {
    this.id = id;
    this.nama_Puskesmas = nama_Puskesmas;
    this.location = location;
    this.telepon = telepon;
    this.faximile = faximile;
    this.email = email;
    this.kepala_puskesmas = kepala_puskesmas;
    this.kode_kota = kode_kota;
    this.kode_kecamatan = kode_kecamatan;
    this.kode_kelurahan = kode_kelurahan;
  }
}


export class PuskesmasObject {

  public status: string;
  public count: number;
  public data: KontakItemPuskesmas[];

  constructor(status: string, count: number, data: KontakItemPuskesmas[]) {
    this.status = status;
    this.count = count;
    this.data = data;
  }
}
