import { ApiService } from './../api.service';
import { Component } from '@angular/core';
// const surat =  './../../quran/surah.json';
// APP Quran
@Component({
  selector: 'app-home-quran',
  templateUrl: 'home-quran.page.html',
  styleUrls: ['home.page.scss'],
  providers: [ApiService]
})
// tslint:disable-next-line: component-class-suffix
export class HomeQuran {
  [x: string]: Object;
  constructor(private http: ApiService) { }
  segment = 'Surat';
  surat: any;
  juz: any;
  bookmark: any;
  kondition = '1';
  // tslint:disable-next-line: variable-name
  surat_detail: any;

  // surat_: any;

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {

    if (this.segment == 'Surat') {
      this.http.alquranSurah().subscribe((res) => {
        const data = res;
        this.surat = data;
        // console.log(data);
      }, (err) => {
        console.log(err);
      });
    } else if (this.segment == 'Juz') {
      this.http.alquranJuz().subscribe((res) => {
        // console.log(res)
        const datax = res;
        this.juz = datax;
        console.log(this.juz);
      }, (err) => {
        console.log(err);
      });
    } else {
      this.bookmark = 'Mohon maaf fitur ini masih dalam pengembangan';
    }

  }

  segmentChanged(ev: any) {
    // console.log('Segment changed', ev);
    this.segment = ev.detail.value;
    // console.log(this.segment);
    if (this.segment == 'Surat') {
      this.http.alquranSurah().subscribe((res) => {
        const data = res;
        this.surat = data;
        // console.log(data);
      }, (err) => {
        console.log(err);
      });
    } else if (this.segment == 'Juz') {
      this.http.alquranJuz().subscribe((res) => {
        // console.log(res)
        const datax = res;
        this.juz = datax;
        // console.log(this.juz);
      }, (err) => {
        console.log(err);
      });
    } else {
      this.bookmark = 'Mohon maaf fitur ini masih dalam pengembangan';
    }
  }

  quran_surah(data: string) {
    this.kondition = '2';
    this.http.alquranDetail2(data).subscribe((res:any) => {
      console.log(res);
      let data_simple = res;
      // let q = detail_simple.push({
      //           id: data,

      //         })
      this.surat_detail = res[data];
    }, (err) => {
      console.log(err);
    });
  }
}
