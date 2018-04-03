import React, { Component } from 'react';
import MyNav from '../nav';
import MyTab from '../tab';
import './index.css';
class MyHead extends Component {
    render() { 
       let {url} = this.props;
       let tab = '';
       //看看当前路由是否包含play
       if(!/play/.test(url.location.pathname)){
            tab = <MyTab url={url}/>;
       }
       return (
        <div id="header">
            <MyNav />
            {tab}
        </div>
       )
    }
}
 
export default MyHead;