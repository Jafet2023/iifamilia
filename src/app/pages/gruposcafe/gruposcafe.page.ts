import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ProviderServiceService } from 'src/app/services/provider-service.service';
import { NavController } from '@ionic/angular';

declare var mapboxgl: any;

@Component({
  selector: 'app-gruposcafe',
  templateUrl: './gruposcafe.page.html',
  styleUrls: ['./gruposcafe.page.scss'],
})
export class GruposcafePage implements OnInit, AfterViewInit {

  empresas: any;

  constructor(private serviceProvider: ProviderServiceService, public navCtrl: NavController) { }

  ngOnInit() {
    // this.serviceProvider.getIglesiashijas().then(data => {
    //   this.empresas = data;
    //   console.log(this.empresas);
    // });
  }

  ngAfterViewInit(){
    mapboxgl.accessToken = 'pk.eyJ1IjoiamFmZXQyMDIzIiwiYSI6ImNrN3RjbGZ1ZTB5engza29keWl0bzl0b3oifQ.UmkO33-SoN8lO17284RQBA';
      
    

    var map = new mapboxgl.Map({
      container: 'map',
        style: 'mapbox://styles/mapbox/light-v10',
        center: [-63.189455, -17.752314],
        zoom: 13
      });

  

      // geojson.features.forEach(function(marker) {

      //   // create a HTML element for each feature
      //   var el = document.createElement('div');
      //   el.className = 'marker';
      
      //   // make a marker for each feature and add to the map
      //   new mapboxgl.Marker(el)
      //     .setLngLat(marker.geometry.coordinates)
      //     .addTo(map);

      //   new mapboxgl.Marker(el)
      //     .setLngLat(marker.geometry.coordinates)
      //     .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
      //     .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
      //     .addTo(map); 
      // });

          

      map.on('load', () => {
        map.resize();

        var geojson = {
          type: 'FeatureCollection',
          features: [{
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-63.189455, -17.752314]
            },
            properties: {
              title: 'Mapbox',
              description: 'Casa de Leslie, S.C.'
            }
          }]
        }
        
        geojson.features.forEach(function(marker) {

          // create a HTML element for each feature
          var el = document.createElement('div');
          el.className = 'marker';
        
          // make a marker for each feature and add to the map
          new mapboxgl.Marker(el)
            .setLngLat(marker.geometry.coordinates)
            .addTo(map);
  
          new mapboxgl.Marker(el)
            .setLngLat(marker.geometry.coordinates)
            .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
            .addTo(map); 
        })
        

        
        // new mapboxgl.Marker()
        // .setLngLat([-63.189455, -17.752314])
        // .addTo(map);
      });
  }
}
