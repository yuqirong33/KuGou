import React, { Component } from 'react';
import { List } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;
class MyList extends Component {
    pushState = () => {
        let {url:{history},dataList} = this.props;
        // console.log(this.props);
        history.push({pathname:'/play/'+dataList.hash});
        
    }
    render() { 
        let {dataList,url} = this.props;
        return (
            <List  className="my-list">
                <Item
                    arrow="horizontal"
                    thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                    multipleLine
                    onClick={this.pushState}
                >
                    {dataList.filename} 
                </Item>
            </List>
        )
    }
}
 
export default MyList;