import { Component, OnInit } from '@angular/core';
import { WeatherService} from '../weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  location={
    city:'dublin',
    code:'ie'
  }

  weather:any;
  value:any;

  constructor(private _weatherService:WeatherService) { }

  ngOnInit() {
    this.value=localStorage.getItem('location');
    console.log('value');
    console.log(this.value);

    if(this.value!=null){
      this.location=JSON.parse(this.value);
    }else{
      this.location={
        city:'dublin',
        code:'ie'
      };
    }

    this._weatherService.getWeather(this.location.city, this.location.code).subscribe( (response)=>[
      console.log(response)
      this.weather = response[0];
    ]);
  }

}
