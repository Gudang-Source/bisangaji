import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  providers: [ApiService]
})
export class TabsPage implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // throw new Error("Method not implemented.");
  }



}
