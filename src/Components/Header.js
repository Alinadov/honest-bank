import React from 'react';
import logo_honestbank from '../pict/logo_honestbank.svg';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {urlServer} from "../_constants";
import {loading} from "../_constants";
// import {userData} from "../_constants";
import storage from '../storage/storage'
import {connect} from "react-redux";
import {getDataFromToken, mapStateToProps} from "../_functions";
import {setRequestHeaders} from "../_requests";
import Accounts from "./Accounts"




class Header extends React.Component {

    // constructor() {
    //     super();
    //
    //     this.state = {
    //         // numb_account: '',
    //         name_user: '',
    //     }
    //
    //     console.log('constructor_Header')
    // }




    render() {
        // const
        //     existNumber = !!this.state.numb_account,
        //     existName = !!this.state.name_user;

        return (
            <div className='header'>
                <div className="container">
                    <div className='header__logo'>
                        <img
                            src={logo_honestbank}
                            alt="logo"
                            className='header__logo-pict' />
                    </div>

                    {/*<Accounts/>*/}

                    <div className="header__numb">
                        <div className="header__howdy">
                            <div className="header__howdy-text">
                             <pre>
                             Howdy, </pre>
                            </div>

                            <div className="header__howdy-user_name">
                                {this.props.nameUser+'!'}
                            </div>

                        </div>
                        {/*<div className="header__numb_account">*/}
                            {/*<div className="header__numb_account-text">*/}
                                {/*/!*Your account*!/*/}
                                {/*Current account*/}
                            {/*</div>*/}
                            {/*<div className="header__numb_account-number">*/}
                                {/*{existNumber*/}
                                {/*? '#' + this.state.numb_account*/}
                                {/*: loading}*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        <Link to='/'>
                        <button className="honest-btn honest-btn--logout" onClick={storage.deleteSession}>
                            Logout
                        </button>
                        </Link>
                    </div>


                </div>

                {console.log('render_Header')}

            </div>
        )
    }

    // componentDidMount() {

        // console.log('didMount_Header_start');

        // setRequestHeaders();
        //
        //
        // const db =  '/accounts/user/',
        //     userData = getDataFromToken(),
        //     id = userData.userId;
        //
        // axios.get(urlServer+db+id)
        //     .then(res => {
        //         console.log('ajax_Header');
        //
        //         this.setState({
        //             numb_account: res.data[0].number,
        //             name_user: res.data[0].customUser.profile.firstName
        //         })
        //     });
        // console.log('didMount_Header_finish');

    // }
}


export default connect(mapStateToProps)(Header);