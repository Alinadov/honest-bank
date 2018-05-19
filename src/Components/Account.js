import React from 'react';
import Header from './Header.js'
import Amount from './Amount.js'
import Wallets from './Wallets.js'


export default class Account extends React.Component {
        render()
        {
            return (
                <div>

                    <Header/>

                    <hr className="line line--green"/>

                    <Amount/>

                    <hr className="line line--green"/>

                    <Wallets/>

                    <hr className="line line--green"/>


                </div>
            )
        }
}

