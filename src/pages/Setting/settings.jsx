import React, { Component } from 'react'
import { connect } from 'react-redux'
import mdui from 'mdui';
import { throttle } from '../../utils'
import './index.scss'

class Settings extends Component {
    constructor(props) {
        super(props);
    }
    componentDidUpdate(){
        mdui.updateSliders();
    }
    onThemeChange(e){
        var font = this.props.theme.font;
        var background = this.props.theme.background;
        var data = {
            font:Object.assign({},font,e.font),
            background:Object.assign({},background,e.background)
        }
        this.props.changTheme({theme:data})
    }
    render() {
        return (
            <div className="setting-page">
                <h1 className="mdui-text-center">设置</h1>
                <h2>主题设置</h2>
                <div className="color-setting">
                    <p>
                        字体颜色： <input type="color" value={this.props.theme.font.color} onChange={e=>this.onThemeChange({font:{color:e.target.value}})}/>
                        字体透明度：
                        <label className="mdui-slider">
                            <input type="range" step="1" min="10" max="255" 
                                value={this.props.theme.font.opacity} 
                                onChange={throttle(e=>this.onThemeChange({font:{opacity:parseInt(e.target.value)}}),300)}/>
                        </label>
                    </p>
                    <p>
                        背景颜色： <input type="color" value={this.props.theme.background.color} onChange={e=>this.onThemeChange({background:{color:e.target.value}})}/>
                        背景透明度：
                        <label className="mdui-slider">
                            <input type="range" step="1" min="10" max="255" 
                                value={this.props.theme.background.opacity} 
                                onChange={throttle(e=>this.onThemeChange({background:{opacity:parseInt(e.target.value)}}),300)}/>
                        </label>
                    </p>
                </div>
                <h2>云存储设置</h2>
                <div className="mdui-textfield mdui-textfield-floating-label">
                    <label className="mdui-textfield-label">七牛云仓库名</label>
                    <input className="mdui-textfield-input" type="text" />
                </div>
                <div className="mdui-textfield mdui-textfield-floating-label">
                    <label className="mdui-textfield-label">AccessKey</label>
                    <input className="mdui-textfield-input" type="text" />
                </div>
                <div className="mdui-textfield mdui-textfield-floating-label">
                    <label className="mdui-textfield-label">SecretKey</label>
                    <input className="mdui-textfield-input" type="text" />
                </div>
                <div className="mdui-textfield mdui-textfield-floating-label">
                    <label className="mdui-textfield-label">域名</label>
                    <input className="mdui-textfield-input" type="text" />
                </div>
                <div>
                    <button> sha </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return ({
        ...state
    })
}

const mapDispatchToProps = (dispatch) => ({
    changTheme(data) {
        dispatch({ type: 'CHANGE_THEME', data: data })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
