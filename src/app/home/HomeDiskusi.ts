import { ApiService } from './../api.service';
import { Component } from '@angular/core';
// APP SHOLAT
@Component({
  selector: 'app-home-diskusi',
  templateUrl: 'home-diskusi.page.html',
  styleUrls: ['home.page.scss'],
  providers: [ApiService]
})
export class HomeDiskusi {
  constructor(private http: ApiService) { }
}
