import React from 'react';
// import axios from 'axios'
import Card from './Card.js'
import {urlServer} from "../_constants";
import axios from "axios/index";
import {loading} from "../_constants/loading";
import {getDataFromToken, mapStateToProps} from "../_functions";
import {connect} from 'react-redux';




class Wallets extends React.Component {

    // constructor() {
    //     super();
    //
    //     this.state = {
    //         user_wallets: [],
    //         flag: 'false'
    //         // account_id: localStorage.getItem('current account')
    //     };
    //
    //     // console.log('constructor_Wallets', 'account_id', this.state.account_id)
    //     console.log('constructor_Wallets')
    // }



// <Card key={id} idCard={id}>
// </Card>
    renderCards(card) {
        const {id, name, number, expiration, blocked} = card;

        return (
                <Card key={id} nameCard={name} numberCard={number} expirationCard={expiration} statusCard={blocked}>
                    {console.log('render_one_Card')}
                </Card>
        )
    }

    render() {
        // const loading = <span className='loading'>...</span>,
        //     existWallets = !!this.state.user_wallets,
        //     existCurrency = !!this.state.user_currency;
        // if (this.state.user_currency == 'USD') {this.state.user_currency ='$'}

        // const cardId = toString(this.state.user_wallets);
        //
        // console.log('state ->', cardId, typeof(cardId) );

        const cards = this.props.userWallets;
        const existCards = !!this.props.userWallets;

        // const cards = this.state.user_wallets;
        //
        // const existCards = !!this.state.user_wallets;



        return (
            <div className='wallets'>
                <div className="container">
                    <div className="wallets__header">
                        <p className="wallets__header-text">
                            Your wallets
                        </p>
                    </div>
                    <div className="wallets__container">

                        {existCards
                            ? cards.map(this.renderCards)
                            : loading}
                    </div>
                </div>

                {console.log('render_Wallets')}
            </div>
        )
    };

    // componentDidMount() {
    //
    //     // console.log('didmount_Wallets_start', 'account_id ->', this.state.account_id);
    //     console.log('didmount_Wallets_start');
    //
    //
    //     const db =  '/wallets/account/',
    //         id = this.props.currentAcc;
    //         // id = this.state.account_id;
    //         // id = '8';
    //     // id = localStorage.getItem('current account');
    //     // console.log(this.props.account);
    //
    //     console.log('didmount_Wallets', 'id ->', id);
    //     console.log('ajax Wallets start');
    //
    //
    //     if (id) {
    //     axios.get(urlServer+db+id)
    //         .then(res => {
    //             console.log('ajax Wallets finish ->', res.data);
    //             this.setState({
    //                 user_wallets: res.data
    //             });
    //             // console.log('number of card ->', this.state.user_wallets);
    //         });
    //     } else {
    //         // this.setState(
    //         //     {flag: 'false'}
    //         // );
    //         console.log('ajax Wallet false')
    //     }
    //
    //     console.log('didmount_Wallets_finish')
    //
    // }

}

export default connect(mapStateToProps)(Wallets);