import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {

  apiKey='a55b5d5fad5250100a1d340d13117a67';
  url;

  constructor(private http:Http) {
    this.url='http://api.openweathermap.org/data/2.5/forecast?q=';
  }

  getWeather(city, code){
    return this.http.get(this.url+city+','+code+'&APPID='+this.apiKey).map((res)=>[
      res.json();
    ]);
  }

}
