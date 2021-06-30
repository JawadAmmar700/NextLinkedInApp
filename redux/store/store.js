import { createStore } from 'redux'
import { combineReducers } from 'redux'

import UserReducer from '../ReduxSlice/UserSlice'


const Allreducers = combineReducers({ User: UserReducer })

const store = createStore(Allreducers,
    (typeof window !== 'undefined' && window.devToolsExtension) &&
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store

