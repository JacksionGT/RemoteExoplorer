import React, { Component } from 'react'
import {
    Link
} from "react-router-dom";
import '../styles/icon/iconfont.css'
import '../styles/sider.scss'
class SiderBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false
        }
        this.toggleActive = this.toggleActive.bind(this);
    }
    render() {
        const { active } = this.state;
        return (
            <div className={`sider${active ? ' active' : ''}`}  onClick={() => this.toggleMenu(false)} onMouseLeave={() => this.toggleMenu(false)}>
                <ul className="menu">
                    <li data-toggle onClick={(e)=>this.toggleActive(e)}>
                        <a>
                            <span className={`iconfont ${active ? 'icontoleft' : 'icontoright'}`}></span>
                            <span>收起</span>
                        </a>
                    </li>
                    <li>
                        <Link to="/">
                            <span className="iconfont iconupload"></span>
                            <span>上传</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/setting">
                            <span className="iconfont iconsitting"></span>
                            <span>设置</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            <span className="iconfont iconperson2"></span>
                            <span>about</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard">
                            <span className="iconfont iconperson2"></span>
                            <span>dashboard</span>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
    toggleMenu(result){
        this.setState({ active: result })
    }
    toggleActive(event) {
        if(event){
            event.preventDefault();
            event.stopPropagation()
        }
        var result = !this.state.active;

        this.setState({ active: result })
    }
}

export default SiderBar