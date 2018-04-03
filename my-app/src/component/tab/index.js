import React, { Component } from 'react';
import {Tabs, WhiteSpace } from 'antd-mobile';
import { Route,Link } from 'react-router-dom';
  
class MyTab extends Component {
    click = (tab,index) => {
        let {url:{history}} = this.props;
        let arr = ['newsong','rank','hot','singer'];
        // console.log(tab)
        history.push({pathname:`/${arr[index]}`});
    } 
    render() { 
        const tabs = [
            { title: '新歌' },
            { title: '排行' },
            { title: '热歌' },
            { title: '歌手' }
          ];
          let {url:{location}} = this.props;
          let obj = {
              '/newsong':0,
              '/rank':1,
              '/hot':2,
              '/singer':3
          }
          let num = obj[location.pathname];
          
        return (
            <div>
                 <WhiteSpace />   
                    <Tabs 
                        tabs={tabs} 
                        renderTabBar={props => 
                            <Tabs.DefaultTabBar {...props} 
                            page={4} 
                            activeTab={num}
                            onTabClick={(tab,index)=>this.click(tab,index)} />
                            }
                    ></Tabs>
                <WhiteSpace />
            </div>
        )
    }
}
 
export default MyTab;