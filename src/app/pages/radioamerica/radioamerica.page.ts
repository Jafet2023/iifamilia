import { Component, OnInit } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Component({
  selector: 'app-radioamerica',
  templateUrl: './radioamerica.page.html',
  styleUrls: ['./radioamerica.page.scss'],
})
export class RadioamericaPage implements OnInit {

  constructor(private nativeAudio: NativeAudio) { }

  ngOnInit() {
    this.nativeAudio.preloadSimple('uniqueId1', 'http://204.197.245.100:8236/;');
  }

}
