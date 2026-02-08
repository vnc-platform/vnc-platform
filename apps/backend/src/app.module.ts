import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HealthProbeController } from './bootstrap/health.probe';
import { ShutdownHandler } from './bootstrap/shutdown.handler';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    })
  ],
  controllers: [HealthProbeController],
  providers: [ShutdownHandler]
})
export class AppModule {}
