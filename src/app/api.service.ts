import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private http: HttpClient) { }

  //AMAN
  worldDate(): Observable<any>  {
    return this.http.get('http://worldtimeapi.org/api/ip', {
      // headers: new Headers({
      //   'Content-Type': 'application/json'
      // })
    }).pipe((map => map));
  }


  // TERKENA CORS
  waktuSholat(data) {
    return this.http.get('https://muslimsalat.com/' + data + '/daily.json?key=95993e49978cc8be9251a20bad6b8986', {
      // headers: new Headers({
      //   'Content-Type': 'application/json'
      // })
    }).pipe((map => map));
  }

  alquranSurah() {
    return this.http.get('./../assets/quran/surah.json', {
      // headers: new Headers({
      //   'Content-Type': "application/json"
      // })
    }).pipe((map => map));
  }

  alquranJuz() {
    return this.http.get('./../assets/quran/juz.json', {
      // headers: new Headers({
      //   'Content-Type': "application/json"
      // })
    }).pipe((map => map));
  }

  alquranDetail(data) {
    return this.http.get(`./../assets/quran/surah/${data}.json`, {
      // headers: new Headers({
      //   'Content-Type': "application/json"
      // })
    }).pipe((map => map));
  }

  alquranDetail2(data) {
    return this.http.get(`http://pusatdata.indotechsolusindo.com/edu/al/${data}.json`, {

    }).pipe((map => map));
  }


  // TERKENA CORS


}
