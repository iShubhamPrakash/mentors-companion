import { API_BASE_URL } from "./base";

const getFullAPIURL = (path) => `${API_BASE_URL}${path}`

// Auth
export const sendLoginOTPURL = getFullAPIURL("/auth/login/sendotp/");
export const sendSignupOTPURL = getFullAPIURL("/auth/signup/sendotp/");
export const verifyOTPURL = getFullAPIURL("/auth/verifyotp/");
