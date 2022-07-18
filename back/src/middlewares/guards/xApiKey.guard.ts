import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

const X_API_KEY = '123';

// EXEMPLO DE CHAMADA ASYNC
// function sleep(ms: number) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(true);
//     }, ms);
//   });
// }

@Injectable()
export class XAPIKeyGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(context: ExecutionContext) {
    const roles = this.reflector.get('roles', context.getHandler());
    const request = context.switchToHttp().getRequest();
    const xApiKey = request.headers['x-api-key'];

    const { id, role, secret } = JSON.parse(
      Buffer.from(xApiKey, 'base64').toString(),
    );

    // EXEMPLO DE CHAMADA ASYNC
    // await sleep(3000);

    request.user = { id };
    return secret == X_API_KEY && roles.includes(role);
  }
}
