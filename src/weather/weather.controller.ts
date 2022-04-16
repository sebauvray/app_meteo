import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { Weather } from 'src/weather/interfaces/weather.interface';
import { WeatherService } from './weather.service';
import { CreateWeatherDto } from './dto/create-weather.dto';
import { WeatherEntity } from './entities/weather.entity';

@Controller('weather')
export class WeatherController {
    constructor(
        private readonly weatherService: WeatherService
    ) {}

    // @Get(':id')
    // find(@Param() params) {
    //     return this.weatherService.find(params.id);
    // }

    @Get()
    async getAllWeather(): Promise<WeatherEntity[]> {
        return await this.weatherService.findAll();
    }

    @Post('create')
    async createWeather(@Body() newWeather: CreateWeatherDto): Promise<WeatherEntity> {
        return await this.weatherService.create(newWeather);
    }
    
    // @Patch('update/:id')
    // updateWeather(@Param('id', ParseIntPipe) id: string, @Body() weather: CreateWeatherDto) {
    //    return this.weatherService.updateWeather(id, weather);
    // }

    // @Delete('delete/:id')
    // deleteWeather(@Param('id', ParseIntPipe) id: string) {
    //     return this.weatherService.deleteWeather(id);
    // }
}
