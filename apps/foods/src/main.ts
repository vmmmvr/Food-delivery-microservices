import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { FoodsModule } from './foods.module';

async function bootstrap() {
  const app = await NestFactory.create(FoodsModule);

  const configService = app.get(ConfigService);
  await app.listen(configService.get('PORT'));
}
bootstrap();
