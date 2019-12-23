import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port : number = 3040;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  console.log(`listening at http://localhost:${port}`);
}
bootstrap();
