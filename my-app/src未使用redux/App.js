import React, { Component } from 'react';
import './App.css';

import MyHead from './component/head';
import axios from 'axios';
import MyNewSong from './component/newSong';

class App extends Component {
  constructor(){
    super();
    this.state = {
      banner:[],
      data:[]
    }
  }
  componentDidMount() {
    axios.get('/proxy/?json=true').then((json)=>{
        let {data:{banner,data}} = json;
        this.setState({
            banner,
            data
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

export default App;
