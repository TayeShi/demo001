import { IMiddleware, Middleware } from '@midwayjs/core';
import { Context, NextFunction } from '@midwayjs/koa';

@Middleware()
export class ErrorMiddleware implements IMiddleware<Context, NextFunction> {
  resolve() {
    return async (ctx: Context, next: NextFunction) => {
      try {
        const result = await next();
        ctx.body = {
          code: 200,
          msg: 'success',
          data: result,
        };
      } catch (e) {
        ctx.body = {
          code: e.code,
          msg: e.message,
          data: '',
        };
      }
    };
  }

  static getName(): string {
    return 'error';
  }
}
