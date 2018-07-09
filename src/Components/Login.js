import React from 'react';
import axios from 'axios';
import logo_honestbank from '../pict/logo_honestbank.svg';
import {Link} from 'react-router-dom';
import storage from '../storage/storage';
import {connect} from 'react-redux';
import jwt_decode from 'jwt-decode';


// import {userData} from "../_constants";
// import rootReducer from './rootReducer';
import {mapStateToProps, getDataFromToken} from "../_functions";




export default class Login extends React.Component {
    constructor () {
        super();
        this.state = {
            phone: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        console.log('constructor_Login')

        }

    handleChange (evt) {
        this.setState({ [evt.target.name]: evt.target.value });

        console.log('handleChange_Login')
    }


    handleSubmit(evt) {

        evt.preventDefault();

        axios.post('https://apihonestbank.herokuapp.com/login',
                {
                    "phone": this.state.phone,
                    "password": this.state.password
                }

            )
            .then(res => {

                let token = res.data;
                localStorage.setItem('token', token);
                let userCheck = getDataFromToken();

                console.log('ajax_Login');

                if (token) {
                    switch(userCheck.role) {
                        case 'ADMIN':
                            this.props.history.push('/admin');
                            // localStorage.setItem('cr', 'a');
                            break;
                        case 'USER':
                            this.props.history.push('/user');
                            // localStorage.setItem('cr', 'u');
                            break;
                        default:
                            this.props.history.push('/');
                    }
                }

                //Old code

                // let token = res.data,
                //     userData = jwt_decode(token),
                //     {sub, userId: id, role, exp} = userData;
                //
                // console.log(token);
                //
                //
                // localStorage.setItem('token', token);
                // localStorage.setItem('userId', id);
                // localStorage.setItem('role', role);
                //
                // // this.props.dispatch({
                // //     type: 'ON_SUBMIT',
                // //     payload: {id, role}
                // // });
                //
                // if (token) {
                //     switch(role) {
                //         case 'ADMIN':
                //             this.props.history.push('/admin');
                //             localStorage.setItem('current_route', '/admin');
                //             break;
                //         case 'USER':
                //             this.props.history.push('/user');
                //             localStorage.setItem('current_route', '/user');
                //             break;
                //         default:
                //             this.props.history.push('/');
                //     }
                // }

                //Old code



                }
            );
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
                            <input className="main__login-input" type="password" name="password" placeholder="password"  onChange={this.handleChange} /><br/>
                        </label>
                        <br/>
                        <button className="honest-btn honest-btn--grey" type="submit">
                                Log in
                        </button>

                    </form>

                    <div className="main__or"> or </div>

                    <button className="honest-btn honest-btn--grey"><Link to='/registration'>Register</Link></button>

                    {console.log('render_Login')}

                </div>
            </div>
            )
        }

    componentDidMount() {
        if (storage.existInStorage()) {
            // storage.deleteUser();

            let userCheck = getDataFromToken();
            switch(userCheck.role) {
                case 'ADMIN':
                    this.props.history.push('/admin');
                    // localStorage.setItem('cr', 'a');
                    break;
                case 'USER':
                    this.props.history.push('/user');
                    // localStorage.setItem('cr', 'u');
                    break;
                default:
                    this.props.history.push('/');
            }
            // let cr = localStorage.getItem('cr');
            // this.props.history.push(cr);
        }

        console.log('didMount_Login')
    }

}


// export default connect(mapStateToProps)(Login);



