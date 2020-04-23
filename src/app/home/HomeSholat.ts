import { ApiService } from './../api.service';
import { Component } from '@angular/core';
// APP SHOLAT
@Component({
  selector: 'app-home-sholat',
  templateUrl: 'home-sholat.page.html',
  styleUrls: ['home.page.scss'],
  providers: [ApiService]
})
export class HomeSholat {
  constructor(private http: ApiService) { }
}
