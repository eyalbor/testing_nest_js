import { Module } from '@nestjs/common';
import { CatsController } from './models/cats/cats.controller';
import { AdminController } from './models/admin/admin.controller';
import { AccountController } from './models/account/account.controller';
import { CatsModule } from './models/cats/cats.module';
import { APP_PIPE } from '@nestjs/core';
import { ValidationPipe } from './common/pipes/validation.pipe';

@Module({
  imports: [CatsModule],
  controllers: [CatsController, AdminController, AccountController],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
