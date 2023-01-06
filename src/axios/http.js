import axios from 'axios';
import qs from 'qs';

//qs.stringify将对象序列化为url形式。 数组indices/brackets/repeat自行选择
function fnParamsSerializer (params) {
  return qs.stringify(params, {arrayFormat: 'repeat'})
}

// 请求参数的处理   像服务器发送前修改请求数据
function fnTransformRequest (data, headers) {
  if (headers['Content-Type'] === 'application/json;charset=UTF-8') {
    return JSON.stringify(data);
  } else if (headers['Content-Type'] === 'application/x-www-form-urlencoded') {
    const fd = new FormData();
    
    for(let key in data) {
      if(data.hasOwnProperty.call(data,key)) {
        fd.append(key, data[key]);
      }
    }
    return fd;
  } else {
    console.error('请指明 Content-Type');
  }
}
 
// 处理 200 响应的请求
// eslint-disable-next-line complexity
function handleHttpResponse (res) {
  let code = res?.data?.code;
  let data = res?.data || {};
  let msg = res?.data?.msg;
  console.log(code)
  if (code === 0) {     
    // 正常返回
    console.log(data)
    return data;
  } else { 
    // 网络异常
    return Promise.reject({ msg, code });
  }
} 

// 处理非 200 响应的错误请求
function handleHttpFailedResponse (error) {
  console.error(error);
  return Promise.reject({ msg: error.message });
} 

const initialConfig = {
  // baseURL: 'http://localhost:8030/',
  timeout: 5000,
  headers: { 'Content-Type': 'application/json;charset=UTF-8' },
  // paramsSerializer: fnParamsSerializer,
  transformRequest: [fnTransformRequest],
  withCredentials: true
};

// 创建自定义实例默认值
const $http = axios.create(initialConfig);
//拦截器 
// 发送请求做什么，请求错误做什么
// 对响应数据做什么，对超过300的状态码做什么
$http.interceptors.request.use(
  config => { return config },
  error => {
    error.data = {};
    error.data.msg = "服务器异常";
    return Promise.reject(error);
  }
)
$http.interceptors.response.use(
  res => handleHttpResponse(res),
  err => handleHttpFailedResponse(err)
)

export {$http};