import React from 'react';
import axios from 'axios';
import logo_honestbank from '../pict/logo_honestbank.svg';
import {Link} from 'react-router-dom';



export default class Main extends React.Component {
    state = {
        phone: ''
        // password: '',
        // role: ''
    }

    handleChange = event => {
        this.setState({
            phone: event.target.value,
            // password: event.target.value,
            // role: event.target.value,
        });
    }


handleSubmit = event => {
        event.preventDefault();

        const user = {
            phone: this.state.phone
            // password: this.state.password,

        };


        axios.post(`https://apihonestbank.herokuapp.com/users`, { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        return (
            <div className="main">
                <div className="main__container">

                    <div className='main__logo'>



                        <img className="main__logo-pict"
                            src={logo_honestbank}
                            alt="logo"/>
                    </div>
                    <form className="main__login" onSubmit={this.handleSubmit}>
                        <label>
                            <input className="main__login-input" type="text" name="phone" placeholder="phone" onChange={this.handleChange} /><br/>
                            <input className="main__login-input" type="text" name="password" placeholder="password" onChange={this.handleChange} /><br/>
                            {/*<input className="main__login-input" type="text" name="role" placeholder="role" onChange={this.handleChange} /><br/>*/}

                        </label>
                        <br/>
                        <button className="honest-btn honest-btn--grey" type="submit">Register</button>
                    </form>

                    <div className="main__or"> or </div>

                    <button className="honest-btn honest-btn--grey"><Link to='/account'>Log in</Link></button>

                    {/*<br />*/}
                    {/*<button className="honest-btn honest-btn--grey" onClick={this.sendAccount}>Send Account</button>*/}

                </div>
            </div>
            )
            }
}
