import React from 'react';
import axios from 'axios'
import {urlServer} from "../_constants";
import {loading} from "../_constants";
// import {userData} from "../_constants";
import {Link} from 'react-router-dom';
import Amount from './Amount';
import Wallets from './Wallets.js';
import {getDataFromToken, mapStateToProps} from "../_functions";
import {connect} from 'react-redux';




class Accounts extends React.Component {

    // constructor() {
    //     super();
    //
    //     this.state = {
    //         user_account: []
    //     };
    //
    //     console.log('constructor_Accounts')
    // }




// <Link to={'/user/'+number} key={id} className="accounts__list-links" onClick={console.log('I am button ' + id)}>
// </Link>


renderAccounts(account) {
        const {id, number, currency} = account;

        return (

                <button key={id} className="accounts__list-links" onClick={() => console.log('I am button ' + id)}>
                    {number}

                    {console.log('render few Accounts')}

                </button>

        )
    }


    render() {

        const accounts = this.props.accounts;
        const existAccounts = !!this.props.accounts;
        // console.log('render_Accounts', 'first_account ->',this.state.user_account[0]);

        // console.log('renderAccounts')

        // const idAccount = this.state.user_account[0].id;
        // console.log(idAccount)

        // if (this.state.user_currency == 'USD') {this.state.user_currency ='$'}

        return (
            <div>
                <div className='accounts'>
                    <div className="container">
                        <div className="accounts__header">
                            <p className="accounts__header-text">
                                Your accounts
                            </p>
                        </div>
                        <div className="accounts__container">
                            <ul className="accounts__list">
                                {/*{console.log(this.state.user_list)}*/}

                                {existAccounts
                                    ? accounts.map(this.renderAccounts)
                                    : loading}
                                {/*{accounts.map(this.renderAccounts)}*/}
                            </ul>
                        </div>

                    </div>
                </div>

            {/*<Amount />*/}

                {console.log('render_Accounts')}


                {/*<Wallets idAccount={idAccount}/>*/}
            {/*<Wallets idAccount='8'/>*/}
                {/*<Wallets />*/}


            </div>
        )
    }

    // componentDidMount() {

        // console.log('didmount_Accounts_start');


        // const db =  '/accounts/user/',
        //     userData = getDataFromToken(),
        //     id = userData.userId;
        //
        // axios.get(urlServer+db+id)
        //     .then(res => {
        //         console.log('ajax_Accounts ->', res.data);
        //         this.setState({
        //             user_account: res.data
        //         })
        //
        //         let id = this.state.user_account[0].id,
        //             number = this.state.user_account[0].number;
        //
        //         // console.log(this.state.user_account[0].id);
        //         localStorage.setItem('current account', this.state.user_account[0].id);
        //         console.log('didmount_Accounts', 'current_account ->', localStorage.getItem('current account'))
        //
        //         this.props.dispatch({
        //             type: 'ON_SUBMIT',
        //             payload: {id, number}
        //         });
        //     });

        // console.log('didmount_Accounts_finish');
    // }

}

export default connect(mapStateToProps)(Accounts);
