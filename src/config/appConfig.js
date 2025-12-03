const configs = {
development:{
    API_BASE_URL:import.meta.env.VITE_API_BASE_URL
},
production:{
    API_BASE_URL:import.meta.env.VITE_API_BASE_PROD,
}
};

const ENV =import.meta.env.VITE_APP_ENV || 'development'

const appConfig = configs[ENV];

export default appConfig;