import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';

import { IdiomaService } from './idioma.service';
import { CreateIdiomaDto } from './dto/createIdioma.dto';
import { UpdateIdiomaDto } from './dto/updateIdioma.dto';

@Controller('api/idioma')
export class IdiomaController {

    constructor(private idiomaService:IdiomaService){}

    @Get()
    getAll(){
        return this.idiomaService.getAll()
    }

    @Post()
    create(@Body() createIdiomaDto:CreateIdiomaDto){
        return this.idiomaService.create(createIdiomaDto);
    }

    @Patch(":id")
    update(@Param('id') id:string, @Body() updateIdiomaDto:UpdateIdiomaDto){
        return this.idiomaService.update(+id, updateIdiomaDto);
    }

    @Delete(":id")
    delete(@Param('id') id:string){
        return this.idiomaService.detele(+id);
    }
}
