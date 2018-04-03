import React, { Component } from 'react';
import MyCarousel from '../zouma';
import MyList from '../List';
import './index.css';
class MyNewSong extends Component {
    render() { 
        let {data,banner,url} = this.props;
        
        let list = data.map((e,i)=>{
          return <MyList {...{dataList:e,key:i,url}} />
        });
        return (
           <div id="newSong">
               <MyCarousel  banner={banner}/>
               {list}
           </div>
        )
    }
}
 
export default MyNewSong;