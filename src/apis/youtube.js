import axios from 'axios';



const KEY = 'AIzaSyCADoRxcT6gD8sPNeZ_I-yHGFjlzmTr8dU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }

});