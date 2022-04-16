import {IsNotEmpty, IsString} from 'class-validator';

export class CreateWeatherDto {

    @IsNotEmpty()
    @IsString()
    readonly main: string;

    @IsNotEmpty()
    @IsString()
    readonly description: string;

    @IsNotEmpty()
    @IsString()
    readonly icon: string;
}