/**
 * Created by kucingmint on 3/24/17.
 */

export class LocationRSK {

  public alamat: string;
  public latitude: number;
  public longitude: number;

  constructor(alamat: string, latitude: number, longitude: number) {
    this.alamat = alamat;
    this.latitude = latitude;
    this.longitude = longitude;
  }
}

export class KontakItemRSK {

  public id: number;
  public nama_rsk: string;
  public jenis_rsk: string;

  public location: LocationRSK;
  public kode_pos: string;
  public telepon: string[];
  public faximile: string[];
  public website: string;
  public email: string;
  public kode_kota: number;
  public kode_kecamatan: number;
  public kode_kelurahan: number;


  constructor(id: number, nama_rsk: string, jenis_rsk: string, location: LocationRSK, kode_pos: string, telepon: string[],
              faximile: string[], website: string, email: string, kode_kota: number, kode_kecamatan: number, kode_kelurahan: number) {

    this.id = id;
    this.nama_rsk = nama_rsk;
    this.jenis_rsk = jenis_rsk;
    this.location = location;
    this.kode_pos = kode_pos;
    this.telepon = telepon;
    this.faximile = faximile;
    this.website = website;
    this.email = email;
    this.kode_kota = kode_kota;
    this.kode_kecamatan = kode_kecamatan;
    this.kode_kelurahan = kode_kelurahan;
  }
}

export class KontakRSKObject {

  public status: string;
  public count: number;
  public data: KontakItemRSK[];

  constructor(status: string, count: number, data: KontakItemRSK[]) {
    this.status = status;
    this.count = count;
    this.data = data;
  }
}

















