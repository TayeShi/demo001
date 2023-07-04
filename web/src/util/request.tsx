// import { useUserStore } from "@/stores/module/user";
import { message } from "antd";
import axios from "axios";

const instance = axios.create({
  baseURL: '/api',
  timeout: 3000,
  // headers: {'X-Custom-Header': 'foobar'}
});

// instance.interceptors.request.use(
//   config => {
//     const userStore = useUserStore()
//     if (userStore.token) {
//       config.headers['Authorization'] = `Bearer ${userStore.token}`;
//     }
//     return config
//   },
//   error => {
//     console.log('request error: ', error)
//   }
// )

export const request = async (data: {
  url: string
  method: 'get' | 'post' | 'delete' | 'put'
  data?: any
  params?: any
}) => {
  try {
    const result = await instance(data)
    // console.log(result)
    // todo 处理errorCode
    if (result.data.code  !== 200) {
      message.error(result.data.message)
    }
    return result.data.data
  } catch (e: any) {
    message.error('请求数据失败')
    return null
  }
}
