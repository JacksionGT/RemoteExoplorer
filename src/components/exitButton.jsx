import React,{ Component } from 'react'
import { remote } from 'electron'

class ExitButton extends Component{
    render(){
        return (
            <span className="close fr" onClick={close}>×</span>
        )
    }
    close(){
        var list = remote.BrowserWindow.getAllWindows();
        var mainWindow = list[0];
        mainWindow.close();
    }
}

export default ExitButton