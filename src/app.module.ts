import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeatherModule } from './weather/weather.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { HttpModule } from '@nestjs/axios';
import { TownModule } from './town/town.module';

@Module({
  imports: [WeatherModule,
            HttpModule.register({
              timeout: 5000,
              maxRedirects: 5,
            }),
            ConfigModule.forRoot({
              envFilePath: ['/env/.env'],
            }),
            ScheduleModule.forRoot(),
            TypeOrmModule.forRoot({
              type: 'postgres',
              host: 'database',
              port: Number(process.env.FORWARD_APP_DB_PORT),
              username: process.env.DB_USERNAME,
              password: process.env.DB_PASSWORD,
              database: process.env.DB_DATABASE_NAME,
              entities: ["dist/**/*.entity{.ts,.js}"],
              synchronize: true,
            }),
            TownModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
