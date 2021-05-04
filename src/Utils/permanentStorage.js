export const LOCAL_STORAGE_KEY = "UdacityFeedbackDataV0";

export const retriveLocalStorage = () =>
	localStorage.getItem(LOCAL_STORAGE_KEY) || [];

export const updateLocalStorage = (data) =>
	localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
