import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProviderServiceService {

  constructor(public http: HttpClient) {
    console.log('Hola Provider');
  }

  apiUrl = 'https://strapi-iifamilia.herokuapp.com';
  // apiUrl = 'http://127.0.0.1:1337';

  getImagenes() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/anuncios').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getMinisterios() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/ministerios').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getStaff() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/staff').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getIglesiashijas() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/iglesiashijas').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getGruposCafe() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/iglesiashijas').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getMenu() {
    return this.http.get('assets/data/menu.json');
  }

  getDetailsMinisterio(id: string) {
    return this.http.get(`${this.apiUrl}/ministerios/${id}`);
  }

  getDetailsIglesiashijas(id: string) {
    return this.http.get(`${this.apiUrl}/iglesiashijas/${id}`);
  }

}
