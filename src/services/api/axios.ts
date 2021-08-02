import axios from 'axios';
import requestAuthInterceptor from './interceptors/auth.interceptor';
import responseErrorInterceptor from './interceptors/error.interceptor';
import responseInterceptor from './interceptors/response.interceptor';

axios.defaults.baseURL = process.env.VUE_APP_API_URL;
axios.defaults.timeout = 10000;
axios.defaults.withCredentials = true;

// docs: https://axios-http.com/docs/interceptors
axios.interceptors.request.use(requestAuthInterceptor);
axios.interceptors.response.use(responseInterceptor, responseErrorInterceptor);

export default axios;
