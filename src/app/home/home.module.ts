import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { HomeQuran } from './HomeQuran';
import { HomeSholat } from './HomeSholat';
import { HomeDiskusi } from './HomeDiskusi';
import { HomeLainnya } from './HomeLainnya';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      },
      {
        path: 'quran',
        component: HomeQuran
      },
      {
        path: 'diskusi',
        component: HomeDiskusi
      },
      {
        path: 'sholat',
        component: HomeSholat
      },
      {
        path: 'lainnya',
        component: HomeLainnya
      },
    ])
  ],
  declarations: [
    HomePage,
    HomeQuran,
    HomeDiskusi,
    HomeSholat,
    HomeLainnya
  ]
})
export class HomePageModule {}
