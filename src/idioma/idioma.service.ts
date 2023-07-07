import { Injectable,Logger, NotFoundException } from '@nestjs/common';
import { IdiomaEntity } from './entity/idioma.entity';
import { CreateIdiomaDto } from './dto/createIdioma.dto';
import { UpdateIdiomaDto } from './dto/updateIdioma.dto';

@Injectable()
export class IdiomaService {
    private idiomas:IdiomaEntity[] = [{id:1,descripcion:'Ingles'}, {id:2,descripcion:'Español'}];
    private logger:Logger = new Logger(IdiomaService.name)

    getAll(){   
        return this.idiomas;
    }

    create(createIdiomaDto:CreateIdiomaDto){
        const newIdioma = new IdiomaEntity();
        newIdioma.descripcion = createIdiomaDto.descripcion;
        this.idiomas.push(newIdioma);
        return newIdioma;
    }

    update(id:number, updateIdiomaDto:UpdateIdiomaDto){
        const existsIdioma = this.idiomas.find(x => x.id===id);
        if(!existsIdioma) throw new NotFoundException(`No existe el id ${id}`)
        this.idiomas = this.idiomas.map(x => x.id === id ? {id, ...updateIdiomaDto}: x);
        return existsIdioma
    }

    detele(id:number){
        const existsIdioma = this.idiomas.find(x => x.id === id);
        if(!existsIdioma) throw new NotFoundException(`No existe el id ${id}`)
        this.idiomas = this.idiomas.filter(x => x.id !== id);
        return existsIdioma
    }
}
