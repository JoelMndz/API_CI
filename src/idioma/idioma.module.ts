import { Module } from '@nestjs/common';
import { IdiomaController } from './idioma.controller';
import { IdiomaService } from './idioma.service';

@Module({
  controllers: [IdiomaController],
  providers: [IdiomaService]
})
export class IdiomaModule {}
