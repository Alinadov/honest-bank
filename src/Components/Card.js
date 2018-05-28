import React from 'react';
import axios from 'axios';
import logo_visa from '../pict/logo_visa.png';
import {urlServer} from "../_constants";
import {loading} from "../_constants/loading";


export default class Card extends React.Component {

    // static propTypes = {
    //     idCard: React.PropTypes.string.isRequired
    // }

    constructor() {
        super();

        this.state = {
            card_name: '',
            card_number: '',
            card_expiration: '',
            card_blocked: ''
        }
    }


    componentDidMount() {

        const  db =  '/wallets/',
            // id = '5';
        id = this.props.idCard;



        axios.get(urlServer+db+id)
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
        const existCardName = !!this.state.card_name,
            existCardNumber = !!this.state.card_number,
            existCardExpiration = !!this.state.card_expiration,
            existCardBlocked = this.state.card_blocked;
        // if (this.state.user_currency == 'USD') {this.state.user_currency ='$'}

        return (
            <div className='card'>
                <div className='card_logo'>
                    <img alt="visa"
                         src={logo_visa}
                         className='card_logo-pict' />
                </div>
                <div className="card__name">
                    {existCardName
                        ? this.state.card_name
                        : loading}
                </div>
                <div className="card__number">
                    {existCardNumber
                        ? this.state.card_number
                        : loading}
                </div>
                <div className="card__exp">
                    {existCardExpiration
                        ? this.state.card_expiration
                        : loading}
                </div>
                <div className="card__status">
                   {existCardBlocked === false ? 'active' : 'blocked'}
                </div>
            </div>
        )
    };

}
