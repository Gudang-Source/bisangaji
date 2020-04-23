import { ApiService } from './../api.service';
import { Component } from '@angular/core';
// import { ApiService}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [ApiService]
})
export class HomePage {

  constructor(private http: ApiService) {}
  tanggal: string;
  jam: string;
  hari: string;
  waktu_bagian: string;

  ngOnInit() {
    setInterval(() => {
      this.http.worldDate().subscribe((res: any) => {
        // console.log(res)
        let ip = res.client_ip;
        let waktu_bagian = res.abbreviation;
        let day_of_week = res.day_of_week;
        let hari = '';
        if(day_of_week == '1') {
          hari = 'Senin';
        } else if(day_of_week == '2') {
          hari = 'Selasa';
        } else if(day_of_week == '3') {
          hari = 'Rabu';
        }  else if(day_of_week == '4') {
          hari = 'Kamis';
        } else if(day_of_week == '5') {
          hari = 'Jum-at';
        } else if(day_of_week == '6') {
          hari = 'Sabtu';
        }  else if(day_of_week == '7') {
          hari = 'Minggu';
        } else {
          hari = 'Uhuy'
        }


        let timezone = res.timezone;
        let tz = timezone.split("/");
        console.log(tz);
        let a = res.datetime.split("T");
        console.log(a);
        let tahun = a[0].substr(0,4);
        let bulan = a[0].substr(5,2);
        let tanggal = a[0].substr(8,2);
        let bln = '';
        if(bulan == '01') {
          bln = 'Januari';
        } else if(bulan == '02') {
          bln = 'Februari';
        } else if(bulan == '03') {
          bln = 'Maret';
        } else if(bulan == '04') {
          bln = 'April';
        } else if(bulan == '05') {
          bln = 'Mei';
        } else if(bulan == '06') {
          bln = 'Juni';
        } else if(bulan == '07') {
          bln = 'Juli';
        } else if(bulan == '08') {
          bln = 'Agustus';
        } else if(bulan == '09') {
          bln = 'September';
        } else if(bulan == '10') {
          bln = 'Oktober';
        } else if(bulan == '11') {
          bln = 'November';
        } else if(bulan == '12') {
          bln = 'Desember';
        }
        this.hari = hari;
        this.jam = a[1].substr(0,5);
        this.waktu_bagian = waktu_bagian
        this.tanggal = tanggal + ' ' + bln + ' ' + tahun;

        // this.http.waktuSholat(tz[1]).subscribe((res) => {
        //   console.log(res);
        // }, (err) => {
        //   console.log(err);
        // })

      }, (err) => {
        console.log(err);
      })
    }, 3000)

  }

}


