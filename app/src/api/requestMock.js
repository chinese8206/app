//axios 封装
import axios from 'axios';

//引入进度条
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';

const mockRequests = axios.create({
    baseURL: "/mock",
    timeout: 5000,
})

mockRequests.interceptors.request.use(config => {
    nprogress.start();
    return config;
})

mockRequests.interceptors.response.use((res) => {
    nprogress.done();
    return res.data;
}, (Error) => {
    return Promise.reject(new Error('请求失败'));
})


export default mockRequests;