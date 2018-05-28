import React from 'react';
import logo_honestbank from '../pict/logo_honestbank.svg';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {urlServer} from "../_constants";
import {loading} from "../_constants/loading";



export default class Header extends React.Component {

    constructor() {
        super();

        this.state = {
            numb_account: '',
            name_user: '',
        }
    }


    componentDidMount() {
        const db =  '/accounts',
              id = '/10';

        axios.get(urlServer+db+id)
            .then(res => {
                console.log(res);
                this.setState({
                    numb_account: res.data.number,
                    name_user: res.data.customUser.profile.firstName
                })
            });
    }

    render() {
        const existNumber = !!this.state.numb_account,
            existName = !!this.state.name_user;

        return (
            <div className='header'>
                <div className="container">
                    <div className='header__logo'>
                        <img
                            src={logo_honestbank}
                            alt="logo"
                            className='header__logo-pict' />
                    </div>

                    <div className="header__howdy">
                         <div className="header__howdy-text">
                             <pre>
                             Howdy, </pre>
                        </div>

                        <div className="header__howdy-user_name">
                                 {existName
                                     ? this.state.name_user+'!'
                                     : loading}
                         </div>

                    </div>

                    <div className="header__numb">
                        <div className="header__numb_account">
                            <div className="header__numb_account-text">
                                Your account
                            </div>
                            <div className="header__numb_account-number">
                                {existNumber
                                ? '#' + this.state.numb_account
                                : loading}
                            </div>
                        </div>
                        <button className="honest-btn honest-btn--logout"><Link to='/'>Logout</Link></button>

                    </div>


                </div>
            </div>
        )
    };
}


