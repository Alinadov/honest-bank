import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Login from './Components/Login.js'
import Admin from './Components/Admin.js'
import User from './Components/User.js'
import Registration from './Components/Registration.js'
import NotFound404 from './Components/NotFound404';


import './style/normalize.css';
import './style/index.css';
import './style/honest-ui.css';
import './style/media.css';

import {Provider, connect} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers/rootReducer';
import {mapStateToProps} from "./_functions";


const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


class App extends React.Component {




        render()
        {
            return (
                <Router>
                    <Switch>
                        <Route exact path={"/"} component={Login} />
                        <Route path={"/registration"} component={Registration} />
                        <Route path={"/user"} component={User} />
                        <Route path={"/admin"} component={Admin} />
                        <Route component={NotFound404}/>
                        {console.log('render_Index')}
                    </Switch>
                </Router>
            )
        }
}

const AppComponent = connect(mapStateToProps)(App);

ReactDOM.render(
    <Provider store={store}>
        <AppComponent/>
    </Provider>,
    document.getElementById('root')
);
