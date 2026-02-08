import { Injectable, OnModuleDestroy } from '@nestjs/common';

@Injectable()
export class ShutdownHandler implements OnModuleDestroy {
  onModuleDestroy() {
    console.log('[VNC] Graceful shutdown initiated');
  }
}
