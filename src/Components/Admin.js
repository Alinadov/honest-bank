import React from 'react';
import {Link} from 'react-router-dom';
import {urlServer} from "../_constants";
import axios from "axios/index";
import storage from "../storage/storage";
import {setRequestHeaders} from "../_requests";
import {getDataFromToken} from "../_functions";

export default class Admin extends React.Component {
    constructor() {
        super();

        this.state = {
            user_list: [],
            user_account: [],
            flag: ''
        };

        // this.setState = this.setState.bind(this);
    }


    componentDidMount() {

        if (!storage.existInStorage()) {
            this.props.history.push('/');
        };

        let userCheck = getDataFromToken();

        if (userCheck.role === 'USER') {
            this.props.history.push('/user');
        };

        setRequestHeaders();

        //  Requesting user list

        let db = '/users';

        axios.get(urlServer + db)
            .then(res => {
                    console.log(res);
                    this.setState({
                        user_list: res.data
                    })
                }
            );

        // Попытка вывести одного юзера

       // const id = ;
       // const db = '/users';


        axios.get(urlServer + '/users' + '/2')
            .then(res => {
                console.log(res);
            });

        //  Requesting user account

        axios.get(urlServer + '/accounts/user/2')
            .then(res => {
                    console.log(res);
                    this.setState({
                        user_account: res.data
                    })
                }
            );
    }

    // deleteThirdUser(id) {
    //     const db = '/users/';
    //           // id = '6';
    //
    //
    //
    //     axios.delete(urlServer + db + id)
    //         .catch((error) => {
    //             // Error
    //             if (error.response) {
    //                 // The request was made and the server responded with a status code
    //                 // that falls out of the range of 2xx
    //                 // console.log(error.response.data);
    //                 // console.log(error.response.status);
    //                 // console.log(error.response.headers);
    //             } else if (error.request) {
    //                 // The request was made but no response was received
    //                 // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    //                 // http.ClientRequest in node.js
    //                 console.log(error.request);
    //             } else {
    //                 // Something happened in setting up the request that triggered an Error
    //                 console.log('Error', error.message);
    //             }
    //             console.log(error.config);
    //         })
    //         .then(res => {
    //             console.log(res);
    //         });
    // }

    renderUsers(user) {
        function deleteThisUser(id) {
            const db = '/users/';
            axios.delete(urlServer + db + id)
                .then(res => {
                    console.log(res);
                });
            // this.setState({
            //     flag: 'upd'
            // });

        }
        const {id, phone, profile} = user;


        return (
            <div>

            <li key={id}>{profile.firstName} {profile.lastName}, {phone}
                <button className="honest-btn honest-btn--logout" onClick={() => deleteThisUser(id)}>
                    Delete user
                </button>
            </li>

            </div>
        )
    }

    renderAccounts(account) {
        const {id, number, currency} = account;

        return (
            <li key={id}>{number} {currency}</li>
        )
    }



    render() {

        const users = this.state.user_list;
        const accounts = this.state.user_account;


        return (
        <div className='admin'>
                <div className="container">
                    <div className="admin__header">
                        <p className="admin__header-text">
                            Your users
                        </p>
                    </div>

                    <div className="admin__container">
                        <ul>
                            {users.map(this.renderUsers)}
                        </ul>
                    </div>

                    <div className="admin__container">

                        <ul>
                            {accounts.map(this.renderAccounts)}
                        </ul>
                    </div>

                </div>

                {/*<button className="honest-btn honest-btn--logout" onClick={this.deleteThirdUser(2)}>*/}
                    {/*Delete user 2*/}
                {/*</button>*/}

            {/*<br/>*/}

                {/*<button className="honest-btn honest-btn--logout" onClick={() => this.deleteThirdUser()}>*/}
                    {/*Delete user 3*/}
                {/*</button>*/}

            {/*<br/>*/}

                {/*<button className="honest-btn honest-btn--logout" onClick={this.deleteThirdUser(4)}>*/}
                    {/*Delete user 4*/}
                {/*</button>*/}

            <br/>

                <Link to='/'>
                    <button className="honest-btn honest-btn--logout" onClick={storage.deleteSession}>
                        Logout
                    </button>

                </Link>
            </div>
        )
    };
}