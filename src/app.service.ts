import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { TownService } from './town/town.service';
import { WeatherService } from './weather/weather.service';
import { WeatherEntity } from './weather/entities/weather.entity';

@Injectable()
export class AppService {
  constructor(
    private httpService: HttpService,
    private readonly townService: TownService,
    private readonly weatherService: WeatherService,
  ) {}
  private readonly logger = new Logger(AppService.name);

  @Cron('0 */2 * * *')
  async handleCron() {
    this.logger.debug('Call API weather now');
    console.log();

    //Get town
    let town = await this.townService.find('1');

    let apikey = process.env.API_KEY;

    //Get data from API openweathermap
    let url =  'https://api.openweathermap.org/data/2.5/weather?lat='+town.lon+'&lon='+town.lat+'&appid='+apikey;
    let { data } = await firstValueFrom( this.httpService.get(url))

    //Create weather
    let weather = new WeatherEntity();
    weather.main = data.weather[0].main;
    weather.description = data.weather[0].description;
    weather.icon = data.weather[0].icon;

    await this.weatherService.create(weather)

    this.logger.debug('Saved');
  }
}
