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
    },
    theme:{
        font:{
            color:'#13c81d',
            opacity:255
        },
        background:{
            color:'#ffffff',
            opacity:255,
        }
    }
}

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'CHANGE_THEME':
            return Object.assign({}, state,action.data)
        case 'DEL_RECORD':
            return Object.assign({}, state)
        default:
            return state
    }
}
