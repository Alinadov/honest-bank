import React from 'react';
// import axios from 'axios'
import Card from './Card.js'


export default class Wallets extends React.Component {

    // constructor() {
    //     super();
    //
    //     this.state = {
    //         user_wallets: ''
    //     }
    // }


    // componentDidMount() {
    //
    //     const url = 'https://apihonestbank.herokuapp.com/',
    //         db =  'wallets',
    //         id = '';
    //
    //
    //     axios.get(url+db+id)
    //         .then(res => {
    //             console.log(res);
    //             this.setState({
    //                 user_wallets: res.data.name,
    //             })
    //         });
    // }

    render() {
        // const loading = <span className='loading'>...</span>,
        //     existWallets = !!this.state.user_wallets,
        //     existCurrency = !!this.state.user_currency;
        // if (this.state.user_currency == 'USD') {this.state.user_currency ='$'}

        return (
            <div className='wallets'>
                <div className="container">
                    <div className="wallets__header">
                        <p className="wallets__header-text">
                            Your wallets
                        </p>
                    </div>
                    <div className="wallets__container">
                        <Card idCard="3" />
                        <Card idCard="2"/>
                        <Card idCard="1"/>
                    </div>
                </div>
            </div>
        )
    };

}
