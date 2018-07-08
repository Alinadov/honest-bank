import React from 'react';
import axios from 'axios';
import logo_visa from '../pict/logo_visa.png';
import {urlServer} from "../_constants";
import {loading} from "../_constants/loading";


export default class Card extends React.Component {

    // static propTypes = {
    //     idCard: React.PropTypes.string.isRequired
    // }

    // constructor() {
    //     super();
    //
    //     this.state = {
    //         card_name: '',
    //         card_number: '',
    //         card_expiration: '',
    //         card_blocked: ''
    //     }
    // }


    // componentWillMount() {
    //
    //     const  db =  '/wallets/',
    //         // id = localStorage.getItem('userId');
    //
    //         // id = '2';
    //     id = this.props.idCard;
    //     // this.props.idCard doesn't work...
    //
    //     console.log('number of card ->', this.props.idCard);
    //
    //
    //     //убрать +3
    //
    //
    //
    //     axios.get(urlServer+db+id)
    //         .then(res => {
    //             console.log(res);
    //             this.setState({
    //                 card_name: res.data.name,
    //                 card_number: res.data.number,
    //                 card_expiration: res.data.expiration,
    //                 card_blocked: res.data.blocked
    //             })
    //         });
    // }

    render() {
        // const existCardName = !!this.state.card_name,
        //     existCardNumber = !!this.state.card_number,
        //     existCardExpiration = !!this.state.card_expiration,
           const existCardBlocked = this.props.statusCard;
        // if (this.state.user_currency == 'USD') {this.state.user_currency ='$'}



        return (
            <div className='card'>
                <div className='card_logo'>
                    <img alt="visa"
                         src={logo_visa}
                         className='card_logo-pict' />
                </div>
                <div className="card__name">
                    {this.props.nameCard}
                </div>
                <div className="card__number">
                    {this.props.numberCard}

                </div>
                <div className="card__exp">
                    {this.props.expirationCard}

                </div>
                <div className="card__status">
                   {existCardBlocked === false ? 'active' : 'blocked'}
                </div>
            </div>
        )
    };

}
