import { MidwayHttpError } from '@midwayjs/core';

export class BusinessError extends MidwayHttpError {
  constructor(errorCode: number, message: string) {
    super(message, errorCode);
  }
}
