import { useState } from 'react';
import { Button, Form, Select, SelectProps } from 'antd';
import './WeatherHeader.scss'
import { httpWeatherCityIds, httpWeatherNow } from '@/api/weather';
import { Weather_Now } from '@/response';

type WeatherHeaderProps = {
	onFinish: (values: Weather_Now) => void
}

let timeout: ReturnType<typeof setTimeout> | null;
// let currentValue: string;

const fetchWeatherCityIds = async (value: string, callback: Function) => {
	if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  // currentValue = value;

  if (value) {
    timeout = setTimeout(() => {
			httpWeatherCityIds({ location: value }).then((res) => {
				if (res && res.list) {
					callback(res.list);
				}
			});
		}, 300);
  } else {
    callback([]);
  }
}

const fetchWeatherNow = async (value: string, callback: Function) => {
	httpWeatherNow({ location: value }).then((res) => {
		if (res && res.now) {
			callback(res.now);
		}
	})
}

const WeatherHeader: React.FC<WeatherHeaderProps> = (props) => {

	const onFinish = (values: any) => {
		fetchWeatherNow(values.cityName, props.onFinish);
	}

	// search input
	/** 下拉列表 */
	const [data, setData] = useState<SelectProps['options']>([]);
	const [value, setValue] = useState('')

	const handleSearch = (newValue: string) => {
		fetchWeatherCityIds(newValue, setData);
  };

	const handleChange = (newValue: any) => {
		setValue(newValue);
  };

	return (
		<div className="weather-header">
			<h2>天气查询</h2>
			<Form
				style={{ maxWidth: 600 }}
				layout='inline'
				onFinish={onFinish}
			>
				<Form.Item
					name="cityName"
					rules={[{ required: true, message: '请输入城市名!' }]}
				>
					{/* <Input /> */}
					<Select
						showSearch
						value={value}
						// placeholder={props.placeholder}
						style={{ width: 200 }}
						defaultActiveFirstOption={false}
						showArrow={false}
						filterOption={false}
						onSearch={handleSearch}
						onChange={handleChange}
						notFoundContent={null}
						options={(data || []).map((d) => ({
							value: d.value,
							label: d.label,
						}))}
					/>
				</Form.Item>
				<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
					<Button type="primary" htmlType="submit">
						查询
					</Button>
				</Form.Item>
			</Form>
		</div>
	)
}

export default WeatherHeader
