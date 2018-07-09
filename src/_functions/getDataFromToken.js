import jwt_decode from 'jwt-decode';


export function getDataFromToken () {
    return jwt_decode(localStorage.getItem('token'));
}

// {sub: "+38011 111-11-11", userId: "2", role: "USER", exp: 1531171707}
