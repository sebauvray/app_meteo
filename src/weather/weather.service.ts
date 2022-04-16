import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Weather } from 'src/weather/interfaces/weather.interface';
import { Repository } from 'typeorm';
import { CreateWeatherDto } from './dto/create-weather.dto';
import { WeatherEntity } from './entities/weather.entity';


@Injectable()
export class WeatherService {
    constructor(
        @InjectRepository(WeatherEntity) private weatherRepository: Repository<WeatherEntity>
    ) {      
    }
    
    // find(id: string) {
    //     if( this.weathers.find(weather => weather.id === Number(id) ) ){
    //         return this.weathers.find(weather => weather.id === Number(id) );
    //     }
    //     else {
    //         return new NotFoundException('Weather not found');
    //     }
    // }

    async findAll(): Promise<WeatherEntity[]> {
        return await this.weatherRepository.find();
    }

    async create(Weather: CreateWeatherDto): Promise<WeatherEntity> {
        return await this.weatherRepository.save(Weather);
    }

    // updateWeather(id: string, weather: Weather) {
    //     const weatherUpdate = this.weathers.find(w => w.id === +id);
    //     if(!weatherUpdate) {
    //         return new NotFoundException('Weather not found');
    //     }
    //     if(weather.title) {
    //         weatherUpdate.title = weather.title;
    //     }
    //     const updatedWeather = this.weathers.map(w => w.id !== +id ? w : weatherUpdate);
    //     return {"message":"Weather is updated", "data": weatherUpdate};
    // }

    // deleteWeather(id: string) {
    //     const nbWeather = this.weathers.length;
    //     const weatherDeleted = this.weathers.find(w => w.id === +id);
    //     this.weathers = [...this.weathers.filter(w => w.id !== +id)];
    //     if(nbWeather > this.weathers.length) {
    //         return {"message":"Weather is deleted", "data": weatherDeleted};
    //     }
    //     else {
    //         return new NotFoundException('Weather not found');
    //     }
       
    // }
}
