import React, { Component } from 'react';

import axios from 'axios';
import './index.css';
import { List } from 'antd-mobile';
const Item = List.Item;
class Singer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[],
            classify:{}
        }
    }
    componentDidMount(){
        axios.get('/proxy/singer/class&json=true')
        .then(res=>{
            let {data:{list}} = res;
            // console.log(data);
            let arr2 = [];
            //抠前2个字
            list.forEach((e,i,all)=>{
                arr2.push(e.classname.substring(0,2));
            });
            //去重
            arr2 = [...new Set(arr2)];
            let obj = {};
            //生产对象数据
            list.forEach((e,i)=>{
               arr2.forEach((k,v)=>{
                   if(e.classname.includes(k)){
                        obj[k] = obj[k] || [];
                        obj[k].push(e);
                   }
               }) 
            });
            this.setState({
                classify:obj
            })
        })
    }
    render() { 
        let {classify} = this.state;
        let arr = [];
        let i = 0;
        for(let attr in classify){
            
            arr.push(<li key={++i} className="border">
                {
                    classify[attr].map((e,index)=>{
                        return (
                            <List key={index} className="my-list">
                                <Item arrow="horizontal" onClick={() => {}}>{e.classname}</Item>
                            </List>
                        )
                    })
                }
            </li>)
        }
        return (
            <div id="singer">
                {arr}
            </div>
        )
    }
}
 
export default Singer;