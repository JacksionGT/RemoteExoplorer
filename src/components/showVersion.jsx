import React,{ Component } from 'react'

import { connect } from 'react-redux'

class ShowVersion extends Component {
    constructor(props) {
        console.log(props);
        super(props);
    }
    render() {
       return (
            <div>
                <div>
                    <h1>Hello World!</h1>
                    We are using node {this.props.version.node + ''},
                    Chrome {this.props.version.chrome + ''}
                    and Electron, {this.props.version.electron + ''}
                </div>
                <button onClick={this.props.delRecord}>冲呀</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state
})

const mapDispatchToProps = (dispatch) => ({
    delRecord(index){
        dispatch({
            type:'DEL_RECORD',
            data:{value:"aa"}
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowVersion)
