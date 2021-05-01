
const production = false;

// Backend API URL
const productionAPI = ""
const devAPI = "http://localhost:5000"

export const API_BASE_URL= production ? productionAPI : devAPI

// socket server endpoint
const productionSocketEndpoint= '';
const devSocketEndpoint = '';

export const SOCKET_SERVER_ENDPOINT = production ? productionSocketEndpoint : devSocketEndpoint;



// cookie and local storage keys
export const LOCAL_STORAGE_AUTH_KEY = '';
export const AUTH_COOKIE_NAME = '';