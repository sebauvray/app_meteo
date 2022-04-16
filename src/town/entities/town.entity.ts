import { WeatherEntity } from "src/weather/entities/weather.entity";
import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm";

@Entity('town')
export class TownEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 50,
        unique: true
    })
    name: string;

    @Column()
    lon: string;

    @Column()
    lat: string;
    
    @Column()
    country: string;

    @ManyToMany(() => WeatherEntity)
    @JoinTable()
    weather: WeatherEntity[]
}