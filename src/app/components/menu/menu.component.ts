import { Component, OnInit } from '@angular/core';
import { ProviderServiceService } from 'src/app/services/provider-service.service';
import { InAppBrowser, InAppBrowserObject  } from '@ionic-native/in-app-browser/ngx';
import { AppAvailability } from '@ionic-native/app-availability/ngx';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(public platform: Platform,
              private serviceProvider: ProviderServiceService, 
              private inAppBrowser: InAppBrowser, 
              private appAvailability: AppAvailability) { }

  ngOnInit() {}

  // openFacebook(name, url) {
  //   let app;

  //   if (this.platform.is('ios')) {
  //     app = 'fb://';
  //   } else if (this.platform.is('android')) {
  //     app = 'com.facebook.katana';
  //   } else {
  //     const browser: InAppBrowserObject = this.inAppBrowser.create('https://www.facebook.com/' + name);
  //     return;
  //   }

  //   this.appAvailability.check(app)
  //     .then(
  //       (yes: boolean) => {
  //         console.log(app + ' is available')
  //         // Success
  //         // App exists
  //         const browser: InAppBrowserObject = this.inAppBrowser.create('fb://facewebmodal/f?href=' + url, '_system');
  //       },
  //       (no: boolean) => {
  //         // Error
  //         // App does not exist
  //         // Open Web URL
  //         const browser: InAppBrowserObject = this.inAppBrowser.create('https://www.facebook.com/' + name, '_system');
  //       }
  //     );
  // }

  // openYoutube(channel) {
  //   let app;

  //   if (this.platform.is('ios')) {
  //     app = 'youtube://';
  //   } else if (this.platform.is('android')) {
  //     app = 'com.google.android.youtube';
  //   } else {
  //     const browser: InAppBrowserObject = this.inAppBrowser.create('https://www.youtube.com/channel/' + channel, '_system');
  //     return;
  //   }

  //   this.appAvailability.check(app)
  //     .then(
  //       (yes: boolean) => {
  //         console.log(app + ' is available')
  //         // Success
  //         // App exists
  //         const browser: InAppBrowserObject = this.inAppBrowser.create('youtube://channel?id=' + channel, '_system');
  //       },
  //       (no: boolean) => {
  //         // Error
  //         // App does not exist
  //         // Open Web URL
  //         const browser: InAppBrowserObject = this.inAppBrowser.create('https://www.youtube.com/channel/' + channel, '_system');
  //       }
  //     );
  // }

  // openInstagram(name) {
  //   let app;

  //   if (this.platform.is('ios')) {
  //     app = 'instagram://';
  //   } else if (this.platform.is('android')) {
  //     app = 'com.instagram.android';
  //   } else {
  //     const browser: InAppBrowserObject = this.inAppBrowser.create('https://www.instagram.com/' + name);
  //     return;
  //   }

  //   this.appAvailability.check(app)
  //     .then(
  //       (yes: boolean) => {
  //         console.log(app + ' is available')
  //         // Success
  //         // App exists
  //         const browser: InAppBrowserObject = this.inAppBrowser.create('instagram://user?username=' + name, '_system');
  //       },
  //       (no: boolean) => {
  //         // Error
  //         // App does not exist
  //         // Open Web URL
  //         const browser: InAppBrowserObject = this.inAppBrowser.create('https://www.instagram.com/' + name, '_system');
  //       }
  //     );
  // }

}
