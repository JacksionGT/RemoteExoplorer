import React,{ Component } from 'react'
import ExitButton from './exitButton'
class TitleBar extends Component {
    render() {
       return (
        <div className="bar">
            <h1>
                <span>Remote Explorer —— 云存储文件管理器</span>
                <ExitButton />
            </h1>
        </div>
        )
    }
}

export default TitleBar