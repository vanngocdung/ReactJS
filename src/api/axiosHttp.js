import axios from 'axios';

export default axios.create({
    baseURL: "https://5f0df28b704cdf0016eaebc7.mockapi.io",
    headers: {
        "Content-type": "application/json"
    }
});