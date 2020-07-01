import axios from 'axios'

export const API_URL = 'http://localhost:3035'

class Service {

    constructor() {
        const service = axios.create({
            headers: {
                'Content-Type': 'multipart/form-data',
                'X-Frame-Options': 'sameorigin',
                'Cache-Control': 'no-cache',
                Pragma: 'no-cache',
                'X-Content-Type-Options': 'nosniff',
            },
        })

        service.interceptors.response.use(this.handleSuccess, this.handleError)

        this.service = service
    }

    handleSuccess = (response) => {
        console.log('response: ' + response)
        return response.data
    }

    handleError = (error) => {
        console.log('error: ' + error)
        return Promise.reject(error)
    }

    post = (endpoint, payload) => {
        const data = this.convertFormData(payload);
        return this.service.request({
            method: 'POST',
            url: `${API_URL}${endpoint}`,
            responseType: 'json',
            withCredentials: true,
            data,
        })
    }

    convertFormData = (data) => {
        const formData = new FormData()

        if (data) {
            for (const [key, value] of Object.entries(data)) {
                formData.append(key, value)
            }
        }

        return formData
    };

}

export default Service
