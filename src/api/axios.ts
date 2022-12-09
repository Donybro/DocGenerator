import axios, {AxiosRequestConfig} from "axios";
const api = axios.create({
    baseURL:'http://23.100.5.244:8083/'
})
api.interceptors.request.use(function (config: AxiosRequestConfig) {
    // Do something before request is sent
    // @ts-ignore
    config.headers['API-KEY'] = 'secret-api-key'
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});
export default api