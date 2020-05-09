import axios from 'axios'

// axios 配置
axios.defaults.baseURL = process.env.VUE_APP_URL
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
axios.defaults.withCredentials = true; //让ajax携带cookie

// uni axios
export function Post(url, param, config) {
    return new Promise((resolve, reject) => {
        axios.post('/api' + url, param, config)
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
        axios.get( '/api' + url, {
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
      return Get('/api/test', param)
    },
    
   // 登陆
   handleSendLogin(param) {
    return Post('/api/test', param)
  }
}

 