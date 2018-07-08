import React from 'react';
import Header from './Header'
import Amount from './Amount'
import Accounts from './Accounts'
import Wallets from './Wallets.js'
import storage from '../storage/storage'
import {connect} from 'react-redux';
import {getDataFromToken, mapStateToProps} from "../_functions";
import {setRequestHeaders} from "../_requests";
import {urlServer} from "../_constants";
import axios from "axios/index";


class User extends React.Component {

    constructor() {
        super();

        this.state = {
            // numb_account: '',
            name_user: '',
            user_amount: '',
            user_currency: '',
            user_accounts: [],
            user_currentAcc:'',
            // user_wallets: [],
        }

        console.log('constructor_User')
    }


    render()
        {
            console.log('render User start');
            console.log(this.state.user_currentAcc);

            return (
                <div>

                    <Header nameUser = {this.state.name_user}/>

                    <Accounts accounts={this.state.user_accounts}/>


                    <Amount accAmount={this.state.user_amount}
                            accCurrency={this.state.user_currency}/>

                    {/*<Wallets userWallets={this.state.user_currentAcc}/>*/}

                    <Wallets userWallets={this.state.user_wallets}/>

                    {console.log('render_User')}

                </div>
            )
        }

    componentDidMount() {
        console.log('didMount_User_start');

        if (!storage.existInStorage()) {
            this.props.history.push('/');
        }

        setRequestHeaders();

        let
            userData = getDataFromToken(),
            id = userData.userId;

        let db =  '/accounts/user/';

        axios.get(urlServer+db+id)
            .then(res => {
                console.log('ajax_User for Header');
                console.log(res.data);


                // this.props.dispatch({
                //     type: 'ON_SUBMIT',
                //     payload: {id, number};

                localStorage.setItem('user_accounts', res.data)

                this.setState({
                // numb_account: res.data[0].number,
                name_user: res.data[0].customUser.profile.firstName,
                user_amount: res.data[0].amount,
                user_currency: res.data[0].currency,
                user_currentAcc: res.data[0].id,
                user_accounts: res.data
                })
            });

        // let user_accounts = localStorage.getItem('user_accounts');

        // console.log(user_accounts);

        // db =  '/wallets/account/';
        // id = this.state.user_currentAcc;
        //
        // axios.get(urlServer+db+id)
        //     .then(res => {
        //         console.log('ajax Wallets finish ->', res.data);
        //         this.setState({
        //             user_wallets: res.data
        //         });

                // console.log('didmount_Wallets_finish')

                // console.log('number of card ->', this.state.user_wallets);
            // });

        // let name_user = localStorage.getItem('name_user')
        // console.log(name_user)


        // else {
        // Prevent reseting redux store

        // const
        // id = localStorage.getItem('userId'),
        // role = localStorage.getItem('role');
        // this.props.dispatch({
        //     type: 'ON_SUBMIT',
        //     payload: {id, role}
        // });
        // }

        console.log('didMount_User_finish')

    }
}


export default connect(mapStateToProps)(User);
