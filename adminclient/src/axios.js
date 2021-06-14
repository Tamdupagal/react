import axios from 'axios';

export default axios.create({
    baseURL: 'http://35.223.212.87/admin/api',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
});