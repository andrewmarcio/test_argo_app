import Axios from "axios";
import { BASE_API_URL } from "@env";


function createHttpClient() {
    const axios = Axios.create({
        baseURL: BASE_API_URL,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    axios.interceptors.response.use(
        response => {
            const message = response.data?.message
            if (message) {
                return { ...response.data, message }
            }
            return response.data
        },
        error => Promise.reject(error)
    )

    return axios
}

const AxiosAdapter = createHttpClient()

export { AxiosAdapter }