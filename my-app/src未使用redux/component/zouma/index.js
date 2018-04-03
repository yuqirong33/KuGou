import React, { Component } from 'react';
import {Carousel, WhiteSpace, WingBlank } from 'antd-mobile';
  
class MyCarousel extends Component {
    constructor(){
        super();
        this.state = {
            data: [],
            imgHeight: 176,
            slideIndex: 0,
        }
    }
    //当父级的数据发生变化的时候会触发
    componentWillReceiveProps(nextProps){//nextProps当前父更新的数据
        let {banner} = nextProps;
        this.setState({
            data:banner
        });
    }
    
    render() { 
        
        return (
            <div>
                <Carousel
                        autoplay={false}
                        infinite
                        selectedIndex={0}
                    // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    // afterChange={index => console.log('slide to', index)}
                    >
                    {this.state.data.map(val => (
                        <a
                        key={val}
                        href="http://www.alipay.com"
                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                        <img
                            src={val.imgurl}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                            }}
                        />
                        </a>
                    ))}
                </Carousel>
            </div>
        )
    }
}
 
export default MyCarousel;