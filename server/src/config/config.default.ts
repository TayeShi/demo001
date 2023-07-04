import { MidwayConfig } from '@midwayjs/core';
import 'dotenv/config'

export default {
  bizConfig: {
    WEATHER_KEY: process.env.WEATHER_KEY,
  },
  // use for cookie sign key, should change to your own and keep security
  keys: '1688375120553_7437',
  koa: {
    port: 7051,
  },
} as MidwayConfig;
