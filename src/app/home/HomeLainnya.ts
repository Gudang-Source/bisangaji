import { ApiService } from './../api.service';
import { Component } from '@angular/core';
// APP SHOLAT
@Component({
  selector: 'app-lainnya-sholat',
  templateUrl: 'home-lainnya.page.html',
  styleUrls: ['home.page.scss'],
  providers: [ApiService]
})
export class HomeLainnya {
  constructor(private http: ApiService) { }
}
