import React, { Component } from 'react';
import { List } from 'antd-mobile';
import axios from 'axios';
import './index.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as creators from '../../myRedux/creaters';

const Item = List.Item;
const Brief = Item.Brief;
class Ranking extends Component {
    constructor(){
        super();
        this.state = {
            dataList:[]
        }
    }
    componentWillMount(){
        let {actions:{on}} = this.props;
        on();
    }
    componentDidMount(){
        let {actions:{off}} = this.props;
        axios.get('/proxy/rank/list&json=true').then((json)=>{
            console.log(json);
            let {data:{rank:{list}}} = json;
            this.setState({
                dataList:list
            },()=>{
                off();
            })
        });
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
function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(creators, dispatch) }
  }
export default connect(state=>state,mapDispatchToProps)(Ranking);