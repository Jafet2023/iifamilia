import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { ProviderServiceService } from './services/provider-service.service';

import { OneSignal } from '@ionic-native/onesignal/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AppAvailability } from '@ionic-native/app-availability/ngx';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [
    ProviderServiceService,
    StatusBar,
    SplashScreen,
    OneSignal,
    AppAvailability,
    InAppBrowser,
    NativeAudio,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
