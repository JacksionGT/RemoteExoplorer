import React, { Component, Fragment } from 'react'
import { TitleBar } from './index'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import { SideBar, ShowVersion } from './index'

class Layout extends Component {
    render() {
        return (
            <Router>
                <TitleBar></TitleBar>
                <div className="main">
                    <SideBar></SideBar>
                    <div className="box">
                        <Switch>
                            <Route exact path="/">
                                <ShowVersion />
                            </Route>
                            <Route path="/about">
                                <h1>关于界面</h1>
                            </Route>
                            <Route path="/dashboard">
                                <h1>Dashboard</h1>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

export default Layout