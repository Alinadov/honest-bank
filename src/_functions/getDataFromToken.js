import jwt_decode from 'jwt-decode';


export function getDataFromToken () {

    return jwt_decode(localStorage.getItem('token'));
}