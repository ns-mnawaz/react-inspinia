import axios from 'axios';

class API {

    static get(url, payload) {
        return axios.get(url)
    }

    static post(url, payload) {
        return axios.get(url)
    }

}

export default API;