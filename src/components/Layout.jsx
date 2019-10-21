import React, { Component, Fragment } from 'react'
import TitleBar from './titleBar'
class Layout extends Component {
    render() {
        return (
            <Fragment>
                <TitleBar></TitleBar>
                <div className="main">
                    <div className="box">
                        <h1>Hello World!</h1>
                        We are using node{process.versions.node+''},
                        Chrome{process.versions.chrome+''}
                        and Electron, {process.versions.electron+''}
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Layout