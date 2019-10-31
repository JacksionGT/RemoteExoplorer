import React, { Component } from 'react';
import { Provider } from "react-redux";
import { createStore } from 'redux'


// import { createBrowserHistory } from "history";
// const customHistory = createBrowserHistory({ basename: '' });
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import { SideBar, ShowVersion, TitleBar } from './components'
import { Settings, Upload} from './pages'
import reducer from './store/reducer'

const store = createStore(reducer);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <TitleBar></TitleBar>
                    <div className="main">
                        <SideBar></SideBar>
                        <div className="box">
                            <Switch>
                                <Route exact path="/">
                                    <Upload />
                                </Route>
                                <Route path="/setting">
                                    <Settings />
                                </Route>
                                <Route path="/about">
                                    <h1>关于界面</h1>
                                </Route>
                                <Route path="/dashboard">
                                    <ShowVersion />
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
