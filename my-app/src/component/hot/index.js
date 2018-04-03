import React, { Component } from 'react';
import { List,Icon } from 'antd-mobile';
import axios from 'axios';
import './index.css';
const Item = List.Item;
const Brief = Item.Brief;
const ico = require('../../images/icon_music.png');
class HotList extends Component {
    constructor(){
        super();
        this.state = {
            dataList:[]
        }
    }
    componentDidMount(){
        axios.get('/proxy/plist/index&json=true').then((json)=>{
            
            let {data:{plist:{list:{info}}}} = json;
            // console.log(info);
            this.setState({
                dataList:info
            })
        })
    }
    render() { 
        let {dataList} = this.state;
        //
        

        let list = dataList.map((e,i)=>{
            console.log(e)
            return (
                <List  className="my-list rank-list" key={i}>
                    <Item
                        arrow="horizontal"
                        thumb={e.imgurl.replace(/{size}/,'400')}
                        multipleLine
                        onClick={() => {}}
                    >
                        {e.specialname}
                    </Item>
                    <div className="hot-ico">
                        <img src={ico}/>
                        <span>{e.playcount}</span>
                    </div>
                    
                </List>
            )
        })
        return (
            <div id="hot">
                {list}
            </div>
        )
    }
}
 
export default HotList;