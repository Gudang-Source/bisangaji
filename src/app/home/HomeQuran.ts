import { ApiService } from './../api.service';
import { Component } from '@angular/core';
// APP Quran
@Component({
  selector: 'app-home-quran',
  templateUrl: 'home-quran.page.html',
  styleUrls: ['home.page.scss'],
  providers: [ApiService]
})
export class HomeQuran {
  constructor(private http: ApiService) { }
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
}
