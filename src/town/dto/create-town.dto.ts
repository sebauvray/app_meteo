import {IsNotEmpty, IsNumber, IsString} from 'class-validator';

export class CreateTownDto {

    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsNotEmpty()
    @IsNumber()
    readonly lon: string;

    @IsNotEmpty()
    @IsNumber()
    readonly lat: string;

    @IsNotEmpty()
    @IsString()
    readonly coountry: string;

}