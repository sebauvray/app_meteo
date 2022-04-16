import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WeatherEntity } from './entities/weather.entity';
import { WeatherController } from './weather.controller';
import { WeatherService } from './weather.service';

@Module({
  imports: [TypeOrmModule.forFeature( [WeatherEntity] )],
  controllers: [WeatherController],
  providers: [WeatherService],
  exports: [WeatherService]
})
export class WeatherModule {}
