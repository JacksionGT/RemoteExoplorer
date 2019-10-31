import React, { Component } from 'react'
import { connect } from 'react-redux'

class Upload extends Component {
    constructor(props) {
        console.log(props);
        super(props);
    }
    render() {
        return (
            <div>
                <h1 className="mdui-text-center">图片上传</h1>
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
