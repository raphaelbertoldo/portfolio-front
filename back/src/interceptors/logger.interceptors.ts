import { Injectable } from '@nestjs/common';
import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>) {
    const now = Date.now();

    console.log('Before...');

    return next
      .handle()
      .pipe(tap(() => console.log(`After ${Date.now() - now}ms...`)));
  }
}
