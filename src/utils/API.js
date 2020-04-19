import axios from 'axios';

export default {
    search : function (query) {
        return axios.get(`https://api.edamam.com/search?q=${query}&app_id=53c99899&app_key=5bcac43624cd4fde163db0d5b37859e3&from=0&to=48`)
    }
}