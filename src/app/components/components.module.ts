import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
// import { PopinfoComponent } from './popinfo/popinfo.component';

import { PreloadImageComponent } from './preload-image/preload-image.component';


@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    PreloadImageComponent
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    PreloadImageComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class ComponentsModule { }
