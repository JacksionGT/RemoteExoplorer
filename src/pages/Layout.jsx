import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import { SideBar, ShowVersion, TitleBar } from '../components'
import { Settings, Upload} from './'


class Layout extends Component {
    constructor(props){
        super(props)
        console.log(props);
        
    }
    render() {
        return (
            <div style={{color:this.props.fontColor,background:this.props.backgroundColor}}>
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
            </div>
        )
    }
}

const mapStateToProps = (state) => {
        
    console.log();
    var fontColor = state.theme.font.color + state.theme.font.opacity.toString(16)
    var backgroundColor = state.theme.background.color + state.theme.background.opacity.toString(16)

    return ({
        fontColor,
        backgroundColor
    })
}

export default connect(mapStateToProps)(Layout)
