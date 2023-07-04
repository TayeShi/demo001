import { Weather_Now } from "@/response"
import { Descriptions } from "antd"
import './WeatherInfo.scss'

type WeatherInfoProps = {
  weather: Weather_Now
}

const WeatherInfo: React.FC<WeatherInfoProps> = (props) => {
  return (
    <>
    { props.weather ? 
    <Descriptions className="weather-info" bordered>
      <Descriptions.Item label="温度">{props.weather.temp}</Descriptions.Item>
      <Descriptions.Item label="体感温度">{props.weather.feelsLike}</Descriptions.Item>
      <Descriptions.Item label="天气状况">{props.weather.text}</Descriptions.Item>
      <Descriptions.Item label="风向360角度">{props.weather.wind360}</Descriptions.Item>
      <Descriptions.Item label="风向">{props.weather.windDir}</Descriptions.Item>
      <Descriptions.Item label="风力等级">{props.weather.windScale}</Descriptions.Item>
      <Descriptions.Item label="风速">{props.weather.windSpeed}</Descriptions.Item>
      <Descriptions.Item label="相对湿度">{props.weather.humidity}</Descriptions.Item>
      <Descriptions.Item label="当前小时累计降水量">{props.weather.precip}</Descriptions.Item>
      <Descriptions.Item label="大气压强">{props.weather.pressure}</Descriptions.Item>
      <Descriptions.Item label="能见度">{props.weather.vis}</Descriptions.Item>
    </Descriptions>
    :
    <>
    <span>暂无数据</span>
    </>}
      
    </>
  )
}

export default WeatherInfo
