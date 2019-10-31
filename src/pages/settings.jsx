import React, { Component } from 'react'
import { connect } from 'react-redux'

class Settings extends Component {
    constructor(props) {
        console.log(props);
        super(props);
    }
    render() {
        return (
            <div>
                <h3>设置</h3>
                <div className="mdui-textfield mdui-textfield-floating-label">
                    <label className="mdui-textfield-label">七牛云仓库名</label>
                    <input className="mdui-textfield-input" type="text" />
                </div>
                <div className="mdui-textfield mdui-textfield-floating-label">
                    <label className="mdui-textfield-label">AK</label>
                    <input className="mdui-textfield-input" type="text" />
                </div>
                <div className="mdui-textfield mdui-textfield-floating-label">
                    <label className="mdui-textfield-label">SK</label>
                    <input className="mdui-textfield-input" type="text" />
                </div>
                <div className="mdui-textfield mdui-textfield-floating-label">
                    <label className="mdui-textfield-label">域名</label>
                    <input className="mdui-textfield-input" type="text" />
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

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
