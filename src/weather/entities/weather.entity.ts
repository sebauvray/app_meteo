import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('weather')
export class WeatherEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    main: string;

    @Column()
    description: string;

    @Column()
    icon: string;
}