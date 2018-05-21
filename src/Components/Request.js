import React, { Component } from 'react';
import Request from 'react-http-request';

export default class Requests extends Component {
    render() {
        return (

            <Request
                url='https://apihonestbank.herokuapp.com/users/2'
                method='delete'
                // headers = {'Content-Type': 'application/json', 'Cache-Control': 'no-cache' }
                accept='application/json'
                verbose={true}>

                {
                    ({error, result, loading}) => {
                        if (loading) {
                            return <div>loading...</div>;
                        } else {
                            return <div>{ JSON.stringify(result) }</div>;
                        }
                    }
                }
            </Request>
        );
    }
}