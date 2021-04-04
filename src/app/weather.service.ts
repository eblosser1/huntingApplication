import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey = 'daae1c1720462c4c212e684e68cc948a';
  private baseUrl = 'https://api.openweathermap.org/data/2.5/'; 
  constructor(private http: HttpClient) { }

  getWeather() {
    let city;
    if(localStorage.city !== undefined) {
       city = localStorage.city;
    } else {
      city = "Lancaster";
    }
    let url = `${this.baseUrl}weather?appId=${this.apiKey}&q=${city}`;
    return this.http.get(url);
  }
}
