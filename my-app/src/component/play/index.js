import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import './index.css';
import axios from 'axios';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as creators from '../../myRedux/creaters';

class Play extends Component {
    constructor(props) {
        super(props);
        this.state = {
            src : '',
            mp3:'',
            title:''
        }
    }
    componentWillMount(){
        let {actions:{on}} = this.props;
        on();
    }
    componentDidMount(){
        let {match:{params},actions:{off}} = this.props;
       
        axios.get('/proxy/app/i/getSongInfo.php?cmd=playInfo&hash='+params.id)
        .then(res=>{
            this.setState({
                src:res.data.imgUrl.replace(/{size}/,'400'),
                mp3:res.data.url,
                title:res.data.fileName
            },()=>{
                off();
            })
        });
        window.scrollTo(0,0);
    }
    render() { 
        let {src,mp3,title} = this.state;
        let {history,reducer:{loading}} = this.props;
        return (
            <div id="play" style={{display:loading?'none':'block'}}>
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
 
function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(creators, dispatch) }
  }
export default connect(state=>state,mapDispatchToProps)(Play);