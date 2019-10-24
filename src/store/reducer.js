const process = window.process || {
    versions:{
        node:0,
        chrome: 0,
        electron:0
    }
}

const defaultState = {
    version: {
        node: process.versions.node || 0,
        chrome: process.versions.chrome || 0,
        electron: process.versions.electron || 0
    }
}

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'ADD_RECORD':
            return Object.assign({}, state)
        case 'DEL_RECORD':
            console.log(action);
            return {
                version:{
                    node:45,
                    chrome: 76,
                    electron:16
                }
            }
        default:
            return state
    }
}
