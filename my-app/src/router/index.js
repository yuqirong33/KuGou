import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import App from '../App';
import Ranking from '../component/Ranking';
import MyHead from '../component/head';
import HotList from '../component/hot';
import Singer from '../component/singer';
import Play from '../component/play';
import Loading from '../component/loading';

let routers = [
    {
        path:'/',
        component:App
    },
    {
        path:'/newsong',
        component:App
    },
    {
        path:'/rank',
        component:Ranking
    },
    {
        path:'/hot',
        component:HotList
    },
    {
        path:'/singer',
        component:Singer
    },
    {
        path:'/play/:id',
        component:Play
    }
];
class Routers extends Component {
    render(){
        let routerEle = routers.map((e,i)=>{
            return <Route exact key={i} path={e.path} component={e.component}/>
        });
        return (
            <Router>
               <div>
                    <Route path='/' children={(props)=>{
                        return <MyHead url={props}/>
                    }}/>
                    <Loading/>
                    {routerEle}
               </div>
            </Router>
        )
    }
}
export default Routers;
