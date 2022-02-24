import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
  // we want to share an instance of the CatsService between several other modules
  exports: [CatsService],
})
export class CatsModule {}
