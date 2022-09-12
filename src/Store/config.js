import {combineReducers, createStore} from 'redux'
import { BaiTapDatVe } from './Reducers/BtdatveRedux'

const rootReducers =combineReducers({

    BaiTapDatVe,    
})


export const store = createStore(rootReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())