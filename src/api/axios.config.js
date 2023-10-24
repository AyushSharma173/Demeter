import axios from 'axios';

const API_BASEURL = 'http://3.18.66.136:5002';

// const cancelToken = axios.cancelToken;
// const source = cancelToken.source();

const isCancel = axios.isCancel

const api_instance = axios.create({
    baseURL: API_BASEURL,
    timeout: 1000000,
})

export { api_instance, isCancel } ;