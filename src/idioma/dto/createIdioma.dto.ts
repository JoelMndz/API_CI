import { IsString, IsNotEmpty } from "class-validator";
import {ApiProperty} from '@nestjs/swagger'

export class CreateIdiomaDto{
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    descripcion:string

}