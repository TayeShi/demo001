import { request } from "@/util/request";
import { API } from ".";
import { Weather_Now } from "@/response";

/**
 * 请求城市id
 */
export const httpWeatherCityIds = async (params: {
  location: string;
}): Promise<{ list: {
  label: string,
  value: string
}[] }> => {
  return await request({
    url: API.WEATHER_CITY_IDS,
    method: 'get',
    params
  })
}

export const httpWeatherNow = async (params: {
  location: string;
}): Promise<{
  now: Weather_Now
}> => {
  return await request({
    url: API.WEATHER_NOW,
    method: 'get',
    params
  })
}