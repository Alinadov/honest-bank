import React from 'react';
import axios from 'axios'
import {urlServer} from "../_constants";
// import {userData} from "../_constants";
import {loading} from "../_constants/loading";
import {getDataFromToken} from "../_functions";



export default class Amount extends React.Component {

    // constructor() {
    //     super();
    //
    //     this.state = {
    //         user_amount: '',
    //         user_currency: ''
    //     }
    //
    //     console.log('constructor_Amount')
    // }




    render() {
        let existAmount = !!this.props.accAmount,
            existCurrency = !!this.props.accCurrency;
        // if (this.state.user_currency == 'USD') {this.state.user_currency ='$'}
        if (this.props.accAmount === 0) {
            existAmount = true
        }

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
                        ? (this.props.accAmount/100)
                        : loading}
                    </p>
                    <br/>
                    <p className="amount__money-currency">
                        {existCurrency
                            ? this.props.accCurrency
                            : loading}
                    </p>
                </div>
                </div>
                {console.log('render_Amount')}
            </div>
        )
    };

    // componentDidMount() {

        // const db =  '/accounts/user/',
        //     userData = getDataFromToken(),
        //     id = userData.userId;
        // // const db =  '/accounts/',
        // //
        // //     id = this.props.idAmount,
        //
        //
        //
        // axios.get(urlServer+db+id)
        //     .then(res => {
        //         console.log('ajax_Mount');
        //         this.setState({
        //             user_amount: res.data[0].amount,
        //             user_currency: res.data[0].currency
        //         })
        //     });
    // }

}
