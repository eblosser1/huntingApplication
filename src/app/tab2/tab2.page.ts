import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  weather;


  constructor(public weatherService: WeatherService) {}

  currentCity = localStorage.city;
  
  onUpdate(city) {
    localStorage.city = city.value;
  }

  ionViewDidEnter(){
    this.weatherService.getWeather()
      .subscribe(data =>{
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

  getPress(pressure) {
    let pres = (pressure/3386);
    return pres.toFixed(2);
  }

  degToCompass(num) {
    const val = Math.floor((num / 22.5) + 0.5);
    const arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    return arr[(val % 16)];
  }

  

}
