import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TownEntity } from './entities/town.entity';
import { Repository } from 'typeorm';
import { CreateTownDto } from './dto/create-town.dto';
import { identity } from 'rxjs';

@Injectable()
export class TownService {
    constructor(
        @InjectRepository(TownEntity) private townRepository: Repository<TownEntity>
    ) {      
    }

    async find(id: string): Promise<TownEntity> {
        return await this.townRepository.findOneOrFail(id);
    }

    async findAll(): Promise<TownEntity[]> {
        return await this.townRepository.find();
    }

    async create(Town: CreateTownDto): Promise<TownEntity> {
        return await this.townRepository.save(Town);
    }
}
