import React, { Component } from 'react'
import { connect } from 'react-redux'
import './upload.scss'

class Upload extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="uppage">
                <h1 className="mdui-text-center uppage-title">图片上传</h1>
                <div className="mdui-valign uppage-uper">
                    <div className="mdui-center mdui-text-center">
                        <em className="iconfont iconupload"></em>
                        <p>将图片拖到此处，或<a className="mdui-text-color-blue">点击上传</a></p>
                    </div>
                </div>
                <div className="mdui-m-t-2">
                    <div className="mdui-row">
                        <div className="mdui-col-xs-6 mdui-text-center">
                            <p className="mdui-m-b-1">链接样式</p>
                            <div className="mdui-btn-group link-type">
                                <button type="button" className="mdui-btn mdui-color-grey-50">Markdown</button>
                                <button type="button" className="mdui-btn mdui-color-blue mdui-text-color-grey-50">HTML</button>
                                <button type="button" className="mdui-btn mdui-color-grey-50">URL</button>
                            </div>
                        </div>
                        <div className="mdui-col-xs-6 mdui-text-center">
                            <p className="mdui-m-b-1">快捷上传</p>
                            <div className="mdui-btn-group link-type">
                                <button type="button" className="mdui-btn mdui-color-blue mdui-text-color-grey-50">剪贴板图片上传</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state
})

const mapDispatchToProps = (dispatch) => ({
    delRecord(index) {
        dispatch({
            type: 'DEL_RECORD',
            data: { value: "aa" }
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Upload)
