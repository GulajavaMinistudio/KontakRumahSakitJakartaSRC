/**
 * Created by kucingmint on 3/23/17.
 */

export class LocationRSU {

  public alamat: string;
  public latitude: number;
  public longitude: number;

  constructor(alamat: string, latitude: number, longitude: number) {
    this.alamat = alamat;
    this.latitude = latitude;
    this.longitude = longitude;
  }
}

export class KontakItemRSU {

  public id: number;
  public nama_rsu: string;
  public jenis_rsu: string;
  public location: LocationRSU;
  public kode_pos: string;
  public telepon: string[];
  public faximile: string[];
  public website: string;
  public email: string;
  public kode_kota: number;
  public kode_kecamatan: number;
  public kode_kelurahan: number;
  public latitude: number;
  public longitude: number;

  constructor(id: number, nama_rsu: string, jenis_rsu: string, location: LocationRSU, kode_pos: string, telepon: string[],
              faximile: string[], website: string, email: string, kode_kota: number, kode_kecamatan: number,
              kode_kelurahan: number, latitude: number, longitude: number) {
    this.id = id;
    this.nama_rsu = nama_rsu;
    this.jenis_rsu = jenis_rsu;
    this.location = location;
    this.kode_pos = kode_pos;
    this.telepon = telepon;
    this.faximile = faximile;
    this.website = website;
    this.email = email;
    this.kode_kota = kode_kota;
    this.kode_kecamatan = kode_kecamatan;
    this.kode_kelurahan = kode_kelurahan;
    this.latitude = latitude;
    this.longitude = longitude;
  }
}


export class KontakRSUObject {

  status: string;
  count: number;
  data: KontakItemRSU[];

  constructor(status: string, count: number, data: KontakItemRSU[]) {
    this.status = status;
    this.count = count;
    this.data = data;
  }
}
