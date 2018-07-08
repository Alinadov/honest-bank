class Storage {

    // setUser({email, password}, callback) {
    //     let users = localStorage.getItem('users'),
    //         operationStatus = false;
    //
    //     if (users) {
    //         users = JSON.parse(users);
    //
    //         const alreadyExist = users.find(user => user.email === email);
    //
    //         if (!alreadyExist) {
    //             users.push({
    //                 email,
    //                 password
    //             });
    //             operationStatus = true;
    //         }
    //     } else {
    //         users = [{
    //             email,
    //             password
    //         }]
    //         operationStatus = true;
    //     }
    //
    //     localStorage.setItem('users', JSON.stringify(users));
    //     if (typeof callback === 'function') {
    //         callback(operationStatus);
    //     }
    // }

    // existInStorage() {
    //     let users = localStorage.getItem('users');
    //
    //     return !!users;
    // }
    //
    // getUser() {
    //     let users = localStorage.getItem('users'),
    //         [user] = JSON.parse(users);
    //
    //     console.log(user);
    //
    //     return user;
    // }
    //
    // deleteUser() {
    //     localStorage.clear()
    // }


    // setUser(token) {
    //     localStorage.setItem('token', token);
    // }

    existInStorage() {
        let users = localStorage.getItem('token');

        return !!users;
    }

    deleteSession() {
        localStorage.clear()
    }

}


export default new Storage();
