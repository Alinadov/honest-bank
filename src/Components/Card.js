import React from 'react';
import axios from 'axios';
import logo_visa from '../pict/logo_visa.png';




export default class Card extends React.Component {

    constructor() {
        super();

        this.state = {
            card_name: '',
            card_number: '',
            card_expiration: '',
            card_blocked: '',
        }
    }


    componentDidMount() {

        const url = 'https://apihonestbank.herokuapp.com/',
            db =  'wallets/',
            id = '2';


        axios.get(url+db+id)
            .then(res => {
                console.log(res);
                this.setState({
                    card_name: res.data.name,
                    card_number: res.data.number,
                    card_expiration: res.data.expiration,
                    card_blocked: res.data.blocked
                })
            });
    }

    render() {
        const loading = <span className='loading'>...</span>,
            existCardName = !!this.state.card_name,
            existCardNumber = !!this.state.card_number,
            existCardExpiration = !!this.state.card_expiration,
            existCardBlocked = !!this.state.card_blocked;
        // if (this.state.user_currency == 'USD') {this.state.user_currency ='$'}

        return (
            <div className='card'>
                <div className='card_logo'>
                    <img alt="visa"
                         src={logo_visa}
                         className='card_logo-pict' />
                </div>
                <p className="card__name">
                    {existCardName
                        ? this.state.card_name
                        : loading}
                </p>
                <p className="card__number">
                    {existCardNumber
                        ? this.state.card_number
                        : loading}
                </p>
                <p className="card__exp">
                    {existCardExpiration
                        ? this.state.card_expiration
                        : loading}
                </p>
                <p className="card__status">
                    {existCardBlocked
                        ? this.state.card_blocked
                        : loading}
                </p>
            </div>
        )
    };

}
