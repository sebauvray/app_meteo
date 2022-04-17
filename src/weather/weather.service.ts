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
    
    async findAll(): Promise<WeatherEntity[]> {
        return await this.weatherRepository.find();
    }

    async create(Weather: CreateWeatherDto): Promise<WeatherEntity> {
        return await this.weatherRepository.save(Weather);
    }
}
