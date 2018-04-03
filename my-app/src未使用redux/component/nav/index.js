import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import './index.css';
class MyNav extends Component {
    render() { 
        return (
            <NavBar
                mode="dark"
                onLeftClick={() => console.log('onLeftClick')}
                rightContent={[
                <Icon key="0" type="search" style={{ marginRight: '12px' }} />,
                ]}
            ></NavBar>
        )
    }
}
 
export default MyNav;