import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-basic.firebaseio.com/'
});

export default instance;