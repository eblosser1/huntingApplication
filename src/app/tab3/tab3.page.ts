import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

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

  convertUnix(time) {
    let t = (time * 1000);

  }

  degToCompass(num) {
    const val = Math.floor((num / 22.5) + 0.5);
    const arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    return arr[(val % 16)];
  }


}
