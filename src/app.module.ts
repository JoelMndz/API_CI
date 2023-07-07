import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IdiomaModule } from './idioma/idioma.module';

@Module({
  imports: [IdiomaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(){
    
  }
}
