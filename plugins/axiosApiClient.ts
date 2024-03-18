import axios from 'axios';
  
export default defineNuxtPlugin((nuxtApp) => {
    const runctimeConfig = useRuntimeConfig()
    const axiosApiClient = axios.create()
    axiosApiClient.defaults.baseURL = runctimeConfig.public.apiUrl
    axiosApiClient.interceptors.request.use(function (config) {
        config.headers['X-Binarybox-Api-Key'] = runctimeConfig.public.apiKey
        return config;
    });
    return {
        provide: {
            axiosApiClient: axiosApiClient,
        },
    };
});