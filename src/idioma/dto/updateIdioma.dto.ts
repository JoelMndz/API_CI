import { IsString, IsNotEmpty } from "class-validator";
import {ApiProperty} from '@nestjs/swagger'

export class UpdateIdiomaDto{
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    descripcion:string

}