import React, { Component } from 'react';
import { Provider } from "react-redux";
import { createStore } from 'redux'
import {Layout} from './pages'

// import { createBrowserHistory } from "history";
// const customHistory = createBrowserHistory({ basename: '' });
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import reducer from './store/reducer'

const store = createStore(reducer);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Layout></Layout>
                </Router>
            </Provider>
        );
    }
}

export default App;
