import { INestApplication } from '@nestjs/common';

export function secureBootstrap(app: INestApplication) {
  app.enableCors({
    origin: true,
    credentials: true
  });

  app.getHttpAdapter().getInstance().disable('x-powered-by');
}
