import React from 'react';
import logo from '../pict/logo.png';
import axios from 'axios';
import {Link} from 'react-router-dom';


export default class Header extends React.Component {

    constructor() {
        super();

        this.state = {
            numb_account: '',
            name_user: '',
        }
    }


    componentDidMount() {
        const url = 'https://apihonestbank.herokuapp.com/',
              db =  'accounts/',
              id = '2';

        axios.get(url+db+id)
            .then(res => {
                console.log(res);
                this.setState({
                    numb_account: res.data.number,
                    name_user: res.data.customUser.profile.firstName
                })
            });
    }

    render() {
        const loading = <span className='loading'>...</span>,
            existNumber = !!this.state.numb_account,
            existName = !!this.state.name_user;

        return (
            <div className='header'>
                <div className="container">
                    <div className='header__logo'>
                        <img
                            src={logo}
                            alt="logo"
                            className='header__logo-pict' />
                    </div>

                    <div className="header__numb_account">
                        <p className="header__numb_account-text">
                            Your account
                        </p>
                        <p className="header__numb_account-number">#
                            {existNumber
                            ? this.state.numb_account
                            : loading}
                        </p>
                    </div>

                    <div className="header__howdy">
                         <span className="header__howdy-text">Howdy, <span className="header__howdy-user_name">
                                 {existName
                                 ? this.state.name_user
                                 : loading}
                             </span>
                         </span>
                    </div>

                     <button className="honest-btn honest-btn--grey"><Link to='/'>Logout</Link></button>
                </div>
            </div>
        )
    };
}


