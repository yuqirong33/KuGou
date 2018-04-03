import React, { Component } from 'react';
import { Icon, Grid } from 'antd-mobile';
import './index.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as creators from '../../myRedux/creaters';

class Loading extends Component {
    componentWillMount(){
        let {actions:{on,off}} = this.props;
        on();
    }
    render() { 
        let {reducer:loading} = this.props;
        return (
            <Icon type="loading" style={{display:loading.loading?'block':'none'}} />
        )
    }
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(creators, dispatch) }
  }
export default connect((state)=>state,mapDispatchToProps)(Loading);