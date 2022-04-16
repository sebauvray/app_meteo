import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TownEntity } from './entities/town.entity';
import { TownController } from './town.controller';
import { TownService } from './town.service';

@Module({
  imports: [TypeOrmModule.forFeature( [TownEntity] )],
  controllers: [TownController],
  providers: [TownService],
  exports: [TownService]
})
export class TownModule {}
