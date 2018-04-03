import React, { Component } from 'react';
import { Icon, Grid } from 'antd-mobile';
import './index.css'
class Loading extends Component {
   
    render() { 
        let {onOff=false} = this.props;
        return (
            <Icon type="loading" style={{display:onOff?'block':'none'}} />
        )
    }
}
 
export default Loading;