import React from 'react';
import axios from 'axios';
import logo_honestbank from '../pict/logo_honestbank.svg';
import {Link} from 'react-router-dom';



export default class Registration extends React.Component {
    constructor () {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange (evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }



    handleSubmit(evt) {

            axios.post('https://apihonestbank.herokuapp.com/registration',
                {
                    "firstName": this.state.firstName,
                    "lastName": this.state.lastName,
                    "phone": this.state.phone,
                    "email": this.state.email,
                    "password": this.state.password
                }
            )
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                });

            evt.preventDefault();
    }

    render () {
        return (

                    <div className="main">
                        <div className="main__container">

                            <div className='main__logo'>
                                <img className="main__logo-pict"
                                    src={logo_honestbank}
                                    alt="logo"/>
                            </div>

                            <form className="main__login" onSubmit={this.handleSubmit}>
                                <input className="main__login-input" type="text" placeholder="First name" name="firstName" onChange={this.handleChange} /><br/>

                                <input className="main__login-input" type="text" placeholder="Last name" name="lastName" onChange={this.handleChange} /><br/>

                                <input className="main__login-input" type="text" placeholder="phone" name="phone" onChange={this.handleChange} /><br/>

                                <input className="main__login-input" type="text" placeholder="email" name="email" onChange={this.handleChange} /><br/>

                                <input className="main__login-input" type="password" placeholder="password" name="password" onChange={this.handleChange} /><br/>

                                <br/>
                                <button className="honest-btn honest-btn--grey" type="submit">Register</button>
                            </form>

                            <button className="honest-btn honest-btn--grey"><Link to='/'>Cancel</Link></button>

                        </div>
                    </div>
        );
    }

    // render() {
    //     return (
    //         <div className="main">
    //             <div className="main__container">
    //
    //                 <div className='main__logo'>
    //                     <img className="main__logo-pict"
    //                         src={logo_honestbank}
    //                         alt="logo"/>
    //                 </div>
    //
    //                 <form className="main__login" onSubmit={this.handleSubmit}>
    //                     <label>
    //                         <input className="main__login-input" type="text" name="phone" placeholder="phone" onChange={this.handleChange} /><br/>
    //                         <input className="main__login-input" type="text" name="password" placeholder="password"  onChange={this.handleChange} /><br/>
    //                         {/*<input className="main__login-input" type="text" name="role" placeholder="role" onChange={this.handleChange} /><br/>*/}
    //
    //                     </label>
    //                     <br/>
    //                     <button className="honest-btn honest-btn--grey" type="submit">Register</button>
    //                 </form>
    //
    //                 <div className="main__or"> or </div>
    //
    //                 <button className="honest-btn honest-btn--grey"><Link to='/'>Cancel</Link></button>
    //
    //                 {/*<br />*/}
    //                 {/*<button className="honest-btn honest-btn--grey" onClick={this.sendAccount}>Send Account</button>*/}
    //
    //             </div>
    //         </div>
    //         )
    //         }
}
