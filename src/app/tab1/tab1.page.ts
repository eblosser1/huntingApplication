import { Component } from '@angular/core';
import { AuthenticationService } from "../app/shared/authentication-service";
import { WeatherService } from '../weather.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  weather;

  constructor(
    public authService: AuthenticationService,
    public weatherService: WeatherService
  ) {}

  currentCity = localStorage.city;

  ionViewDidEnter(){
    this.weatherService.getWeather()
      .subscribe(data => {
        this.weather = data;
      }),
      err => { console.log(err)},
      () => { console.log('done')};
    this.currentCity = localStorage.city;
  }

  getTemp(temp) {
    let rd = (temp-273.15) * (9/5) + 32;
    return rd.toFixed(1);
  }

  convertUnix(time) {
    let t = new Date(time * 1000);
    var hour = t.getHours();
    var min = t.getMinutes();
    var actual = hour + ':' + min;
    return actual;
  }
}
