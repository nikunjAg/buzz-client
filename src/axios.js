import axios from "axios";

export const BASE_URL = "http://localhost:8000/api/v1";

const instance = axios.create({
	baseURL: BASE_URL,
});

export default instance;
