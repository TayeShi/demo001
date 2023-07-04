import { Config, Inject, Provide } from "@midwayjs/core";
import { HttpService } from '@midwayjs/axios';

@Provide()
export class WeatherService {

  @Inject()
  httpService: HttpService;

  @Config('bizConfig')
  bizConfig;

  /**
   * 获取城市id列表
   * @param location 匹配字段 
   */
  async queryCityList(location: string): Promise<{
    label: string,
    value: string
  }[]> {
    const result = await this.httpService.get(
      'https://geoapi.qweather.com/v2/city/lookup',
      {
        params: {
          location,
          key: this.bizConfig.WEATHER_KEY,
        },
      }
    );
    if (result.data.code == 200) {
      return result.data.location.map(item => {
        return {
          label: item.name, // 城市名
          value: item.id // 城市对应id
        }
      });
    }
  }

  /**
   * 根据城市id查询当前天气
   * @param location 
   * @returns 
   */
  async getWeatherNow(location: string) {
    const result = await this.httpService.get(
      'https://devapi.qweather.com/v7/weather/now',
      {
        params: {
          location,
          key: this.bizConfig.WEATHER_KEY,
          lang:'zh',
        },
      }
    );
    if (result.data.code == 200) {
      return {
        now: result.data.now
      };
    }
  }

}