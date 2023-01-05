//axios 封装
import axios from 'axios';
//引入仓库
import store from '@/store'
//引入进度条
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';

const requests = axios.create({
    baseURL: "/api",
    timeout: 5000,
})

requests.interceptors.request.use(config => {
    
    nprogress.start();
    if (store.state.detail.uuid_token){
        config.headers.userTempId = store.state.detail.uuid_token
    }

    if (store.state.user.token){
        config.headers.token = store.state.user.token
    }


    return config;
    
})

requests.interceptors.response.use((res) => {
    nprogress.done();
    return res.data;
}, (Error) => {
    return Promise.reject(new Error('请求失败'));
})


export default requests;