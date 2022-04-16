import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { TownService } from './town.service';
import { CreateTownDto } from './dto/create-town.dto';
import { TownEntity } from './entities/town.entity';

@Controller('town')
export class TownController {
    constructor(
        private readonly townService: TownService
    ) {}

    @Get(':id')
    find(@Param() params) {
        return this.townService.find(params.id);
    }

    @Get()
    async getAllWeather(): Promise<TownEntity[]> {
        return await this.townService.findAll();
    }

    @Post('create')
    async createWeather(@Body() newTown: CreateTownDto): Promise<TownEntity> {
        return await this.townService.create(newTown);
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
