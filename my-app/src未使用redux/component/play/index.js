import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import './index.css';
import axios from 'axios';

class Play extends Component {
    constructor(props) {
        super(props);
        this.state = {
            src : '',
            mp3:'',
            title:''
        }
    }
    componentDidMount(){
        let {match:{params}} = this.props;
        axios.get('/proxy/app/i/getSongInfo.php?cmd=playInfo&hash='+params.id)
        .then(res=>{
            console.log(res)
            this.setState({
                src:res.data.imgUrl.replace(/{size}/,'400'),
                mp3:res.data.url,
                title:res.data.fileName
            })
        });
        window.scrollTo(0,0);
    }
    render() { 
        let {src,mp3,title} = this.state;
        let {history} = this.props;
        // console.log(history)
        return (
            <div id="play">
            <div className="hxcb"></div>
            <div id="bg" style={{backgroundImage:`url(${src})`}}></div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={()=>{history.go(-1)}}
                    >{title}</NavBar>
                <img className="playImage" src={src} />
                <audio id="audio" src={mp3} controls autoPlay >
                    <source src={mp3} type="audio/mpeg" />
                </audio>
            </div>
        )
    }
}
 
export default Play;