import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routers from './router';
/*
    酷狗接口地址。
    https://segmentfault.com/a/1190000010222913#articleHeader2
*/

ReactDOM.render(
    <Routers />
    , 
    document.getElementById('root')
);

if(module.hot){
    module.hot.accept();
}
