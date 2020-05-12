import axios from 'axios'
import {baseApi} from '@/config'

console.log(baseApi)

// axios 配置
axios.defaults.baseURL = ''
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
axios.defaults.withCredentials = true; //让ajax携带cookie

// uni axios
export function Post(url, param, config) {
    return new Promise((resolve, reject) => {
        axios.post(url, param, config)
            .then(
                res => {
                    resolve(res.data);
                },
                err => {
                    reject(err);
                })
            .catch((error) => {
                reject(error)
            })
    })
}
export function Get(url, param) {
    return new Promise((resolve, reject) => {
        axios.get( url, {
            params: param
        })
            .then(
                res => {
                    resolve(res.data);
                },
                err => {
                    reject(err);
                })
            .catch((error) => {
                reject(error)
            })
    })
}

// default
export default {
    // 示例
    handleGetApiTest(param) {
      return Get('/api/******', param)
    },
}

 