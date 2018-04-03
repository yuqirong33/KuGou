import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routers from './router';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import reducers from './myRedux/reduces';
const store = createStore(reducers);
/*
    酷狗接口地址。
    https://segmentfault.com/a/1190000010222913#articleHeader2
*/

ReactDOM.render(
    <Provider store={store}>
        <Routers />
    </Provider>
    , 
    document.getElementById('root')
);

if(module.hot){
    module.hot.accept();
}
