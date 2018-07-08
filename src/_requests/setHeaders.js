import axios from 'axios';

export function setRequestHeaders() {

    // let token = localStorage.getItem('token');

    axios.defaults.headers.common['authorization'] = `Token ${localStorage.getItem('token')}`;


    console.log('setRequestHeaders')

    // "undefinedaccept": "application/json",
    //     'X-HTTP-Method-Override': "GET",
    // 'withCredentials': true,
    // "Access-Control-Allow-Origin": "*",
    // "Access-Control-Allow-Origin": "*",
    // "Access-Control-Allow-Credentials":"true"
    // "accept-encoding": "gzip, deflate",
    // "accept-language": "en-US,en;q=0.8",
    // "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)  Chrome/67.0.3396.87 Electron/1.7.12 Safari/537.36",

}