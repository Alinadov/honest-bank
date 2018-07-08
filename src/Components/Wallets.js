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
    //         account_id: localStorage.getItem('current account')
    //     };
    //
    //     console.log('constructor_Wallets', 'account_id', this.state.account_id)
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
    //     console.log('didmount_Wallets_start', 'account_id ->', this.state.account_id);
    //
    //
    //     const db =  '/wallets/account/',
    //         // id = this.props.account.id;
    //         id = this.state.account_id;
    //     // id = localStorage.getItem('current account');
    //     // console.log(this.props.account);
    //
    //     console.log('didmount_Wallets', 'id ->', id);
    //     console.log('ajax Wallets start');
    //
    //
    //
    //     axios.get(urlServer+db+id)
    //         .then(res => {
    //             console.log('ajax Wallets finish ->', res.data);
    //             this.setState({
    //                 user_wallets: res.data
    //             });
    //
    //             console.log('didmount_Wallets_finish')
    //
    //             // console.log('number of card ->', this.state.user_wallets);
    //         });
    // }

}

export default connect(mapStateToProps)(Wallets);