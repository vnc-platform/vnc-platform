import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class HealthProbeController {
  @Get()
  health() {
    return {
      status: 'ok',
      service: 'vnc-backend',
      timestamp: new Date().toISOString()
    };
  }
}
