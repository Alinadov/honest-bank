import React from 'react';
import axios from 'axios'
import {urlServer} from "../_constants";


export default class Amount extends React.Component {

    constructor() {
        super();

        this.state = {
            user_amount: '',
            user_currency: ''
        }
    }


    componentDidMount() {

        const db =  '/accounts',
              id = '/7';


        axios.get(urlServer+db+id)
            .then(res => {
                console.log(res);
                this.setState({
                    user_amount: res.data.amount,
                    user_currency: res.data.currency
                })
            });
    }

    render() {
        const loading = <span className='loading'>...</span>,
            existAmount = !!this.state.user_amount,
            existCurrency = !!this.state.user_currency;
        // if (this.state.user_currency == 'USD') {this.state.user_currency ='$'}

        return (
            <div className='amount'>
                <div className="container">
                <div className="amount__money">
                    <p className="amount__money-text">
                        You have
                    </p>
                    <br/>
                    <p className="amount__money-number">
                        {existAmount
                        ? (this.state.user_amount/100)
                        : loading}
                    </p>
                    <br/>
                    <p className="amount__money-currency">
                        {existCurrency
                            ? this.state.user_currency
                            : loading}
                    </p>
                </div>
                </div>
            </div>
        )
    };

}
