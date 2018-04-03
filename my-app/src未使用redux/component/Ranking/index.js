import React, { Component } from 'react';
import { List } from 'antd-mobile';
import axios from 'axios';
import './index.css';
const Item = List.Item;
const Brief = Item.Brief;
class Ranking extends Component {
    constructor(){
        super();
        this.state = {
            dataList:[]
        }
    }
    componentDidMount(){
        axios.get('/proxy/rank/list&json=true').then((json)=>{
            console.log(json);
            let {data:{rank:{list}}} = json;
            this.setState({
                dataList:list
            })
        })
    }
    render() { 
        let {dataList} = this.state;

        console.log(dataList)

        let list = dataList.map((e,i)=>{
            return (
                <List  className="my-list rank-list" key={i}>
                    <Item
                        arrow="horizontal"
                        thumb={e.banner7url.replace(/{size}/,'400')}
                        multipleLine
                        onClick={() => {}}
                    >
                        {e.rankname}
                    </Item>
                </List>
            )
        })
        return (
            <div id="rank">
                {list}
            </div>
        )
    }
}
 
export default Ranking;