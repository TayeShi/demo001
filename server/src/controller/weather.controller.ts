import { Controller, Get, Inject, Query } from "@midwayjs/core";
import { WeatherService } from "../service/weather.service";
import { Context } from "koa";

@Controller('/weather')
export class WeatherController {

  @Inject()
  ctx: Context
  
  @Inject()
  weatherService: WeatherService

  @Get('/city_ids')
  async getCityIds(@Query('location') location: string): Promise<{ list: {
    label: string,
    value: string
  }[] }> {
    const list = await this.weatherService.queryCityList(location)
    return {
      list
    }
  }

  @Get('/now')
  async getWeatherNow(@Query('location') locaation: string): Promise<any> {
    return await this.weatherService.getWeatherNow(locaation)
  }
}