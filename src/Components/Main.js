import React from 'react';
import axios from 'axios';
import logo from '../pict/logo.png';
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
deleteUser = () => {
    axios.delete(`https://apihonestbank.herokuapp.com/users/2`)
.then(res => {
    console.log(res);
    console.log(res.data);
})
}

handleSubmit = event => {
        event.preventDefault();

        const user = {
            phone: this.state.phone
            // password: this.state.password,
            // role: this.state.role,
        };

        // function sendUser () {
        //     axios.post(`https://apihonestbank.herokuapp.com/users`, {
        //         phone: "0991234567",
        //         password: "1qwerty7",
        //         role: "ADMIN"
        //     })
        //         .then(res => {
        //             console.log(res);
        //             console.log(res.data);
        //         })
        // }
        //
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
                            src={logo}
                            alt="logo"/>
                    </div>
                    <form className="main__login" onSubmit={this.handleSubmit}>
                        <label>
                            <input className="main__login-input" type="text" name="phone" placeholder="phone" onChange={this.handleChange} /><br/>
                            <input className="main__login-input" type="text" name="password" placeholder="password" onChange={this.handleChange} /><br/>
                            <input className="main__login-input" type="text" name="role" placeholder="role" onChange={this.handleChange} /><br/>

                        </label>
                        <br/>
                        <button className="honest-btn honest-btn--grey" type="submit">Register</button>
                    </form>
                    {/*<input value="Нажми меня" onClick={axios.post(`https://apihonestbank.herokuapp.com/users`, {*/}
                        {/*phone: "0991234567",*/}
                        {/*password: "1qwerty7",*/}
                        {/*role: "ADMIN"*/}
                    {/*})*/}
                        {/*.then(res => {*/}
                            {/*console.log(res);*/}
                            {/*console.log(res.data);*/}
                        {/*})} type="button" />*/}
                    {/*<input value="Del 6" onClick={*/}
                        {/*axios.delete(`https://apihonestbank.herokuapp.com/users/6`)*/}
                            {/*.then(res => {*/}
                                {/*console.log(res);*/}
                                {/*console.log(res.data);*/}
                            {/*})} type="button" />*/}
                    <div className="main__or"> or </div>

                    <button className="honest-btn honest-btn--grey"><Link to='/account'>Log in</Link></button>

                  <br />
                    <button className="honest-btn honest-btn--grey" onClick={this.deleteUser}>Delete User</button>

                </div>
            </div>
            )
            }
}
