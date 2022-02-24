import { NestFactory } from '@nestjs/core';
import {
  SwaggerModule,
  DocumentBuilder,
  SwaggerCustomOptions,
} from '@nestjs/swagger';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { logger } from './common/middlewares/logger.middlewares';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
    logger: ['error', 'warn', 'debug', 'verbose', 'log'],
  });

  //Helmet can help protect your app from some well-known web vulnerabilities by setting HTTP headers appropriately
  app.use(helmet());
  app.use(logger);

  const APP_NAME = process.env.npm_package_name;
  const APP_VERSION = process.env.npm_package_version;
  const AUTHOR = process.env.npm_package_author_name;

  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription(`The ${APP_NAME} API description`)
    .setVersion(APP_VERSION)
    .setContact(AUTHOR, '', '')
    .addTag('cats')
    .build();

  const customOptions: SwaggerCustomOptions = {
    customSiteTitle: 'Cats API Docs',
  };

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document, customOptions);

  await app.listen(3000);
}

bootstrap();
