import React from 'react';
import ReactDOM from 'react-dom';
import Account from './Components/Account.js'
import Main from './Components/Main.js'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './style/normalize.css';
import './style/index.css';
import './style/honest-ui.css';
import './style/media.css';
import Requests from "./Components/Request";



class App extends React.Component {


        render()
        {
            return (
            <div>

                <h1> Howdy How! </h1>
                <button><Link to='/'>Logout</Link></button>

            </div>
            )
        }
}

ReactDOM.render(
    <Router>
        <div>
        <Route exact path={"/"} component={Main} />
        <Route path={"/account"} component={Account} />
        <Route path={"/default"} component={App} />
        <Route path={"/requests"} component={Requests} />

        </div>
    </Router>,
    document.getElementById('root'));

