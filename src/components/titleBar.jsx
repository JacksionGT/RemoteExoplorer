import React,{ Component } from 'react'
import { remote } from 'electron'

class TitleBar extends Component {
    render() {
       return (
        <div className="bar">
            <h1>
                <span>标题</span>
                <span className="close fr" onClick={close}>×</span>
            </h1>
        </div>
        )
    }
    close(){
        var list = remote.BrowserWindow.getAllWindows();
        var mainWindow = list[0];
        mainWindow.close();
    }
}

export default TitleBar