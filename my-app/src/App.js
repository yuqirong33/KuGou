import React, { Component } from 'react';
import './App.css';
import MyHead from './component/head';
import axios from 'axios';
import MyNewSong from './component/newSong';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as creators from './myRedux/creaters';

class App extends Component {
  constructor(){
    super();
    this.state = {
      banner:[],
      data:[]
    }
  }
  componentWillMount(){
    let {actions:{on}} = this.props;
    on();
  }
  componentDidMount() {
    let {actions:{off}} = this.props;
    axios.get('/proxy/?json=true').then((json)=>{
        let {data:{banner,data}} = json;
        this.setState({
            banner,
            data
        },()=>{
          off();
        });
    })
  }
  render() {
    let {banner,data} = this.state;
    
    return (
      <div className="App">
        <MyNewSong {...{
          banner,
          data,
          url:this.props
        }}/>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(creators, dispatch) }
}
export default connect(state=>state,mapDispatchToProps)(App);
