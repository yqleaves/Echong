import React,{Component} from 'react';
import {Content} from "./styled"
import {NavLink,Link} from "react-router-dom"
import Swiper from "swiper"
import List from "../../components/list"
import {PageContainer} from "common/styled"
import Sail from "components/sail"

class Selected extends Component{
    constructor(props){
        super(props);
        this.state = {
            nav:[
                {
                    title:"精选",
                    path:"/",
                },
                {
                    title:"进口狗粮",
                    path:"/"                                  
                },
                {
                    title:"国产狗粮",
                    path:"/"                                  
                },
                {
                    title:"内外驱虫",
                    path:"/"   
                },
                {
                    title:"",
                    path:"/" 
                },
                
            ],

            menu:[
                {
                    img:"https://img2.epetbar.com/2019-11/15/23/e172686fcd97b548ebfcb62c694f2801.png@!water",
                    path:"/"
                },
                {
                    img:"https://img2.epetbar.com/2019-11/15/23/3fe5bbce73f303015077ed7a827de61c.png@!water",
                    path:"/"
                },
                {
                    img:"https://img2.epetbar.com/2019-11/18/11/2fc10590dceefa9e3db0b32cdc5292fd.gif",
                    path:"/"
                },
                {
                    img:"https://img2.epetbar.com/2019-11/18/11/0c37c313f2d988dad4173881cd02a988.png@!water",
                    path:"/"
                },
                {
                    img:"https://img2.epetbar.com/2019-11/16/00/1ec58c7b09ad2baa80e57609d87b6244.png@!water",
                    path:"/"
                }
            ],

            show:false,
        }
    }
    render(){
        let {nav,menu} = this.state
        return(
            <PageContainer>
            <Content ref={el=>this.bodybox=el}>
                {/* header */}
                <div className="head-box">
                    <div className="search">
                    <Link to="/search" className="input">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUg
                        AAABwAAAAcCAMAAABF0y+mAAAAflBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZm
                        ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm
                        ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm
                        ZmZmZmZmZmZmZmZmZmZmZmZmZmZmbXo4A1AAAAKXRSTlMABPz3FQnh2ZPm
                        fnQgsF4kEOvTzMWlZFkovrs0LxupoIhOSkZA7rlsaoBCP64AAAECSURBVCjPd
                        ZHXkgIhEEXJDJNzckyrG+7//+AWojLJ83KpOnQ3VJMnxyhRnKshjMkacWZ4wk
                        4r/WXAT10sZdw1HPx37lqGMX73b4BgVscQkhkpR/SeVzjnuTLciSPASFaE
                        0NQVctavpdTo3GuQkA0p6kcmaLdScgibGj3ZMuBqg0PuyMD9hoHuyBAXG
                        wZiR15cZYX7jmyQuu7hjlSYbNygtkMnFNQmVeg28vxaTAuTr9yBscydaI
                        1h2ZiWfqNHg59FbQYufJcC+uad7VXl/moJVH89JbRP7TChUfpaGhUA8A
                        24BYoSOp4tKU0MA1RzIA9bQWVkQT471jAT+YQcoclnG0T/ZkYT5KqIvn
                        AAAAAASUVORK5CYII=" alt=""/>
                        <span>请输入搜索内容</span>
                    </Link>
                        <p></p>
                </div>

                    <div className="nav">
                        <ul>
                            {
                                nav.map((item,index)=>(
                                    <li key={index}> 
                                            <NavLink to={item.path}>
                                                {item.title}
                                            </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

                {/*轮播图  */}
                <div className="swiper-container swiper1">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <img src="https://img2.epetbar.com/2019-11/25/19/1727033e100a78ea79fe131c01ec060e.png?x-oss-process=style/water" alt=""/>
                        </div>
                        <div className="swiper-slide">
                            <img src="https://img2.epetbar.com/nowater/2019-11/21/13/15af128657ebcbe6eb03ce05479db766.jpg?x-oss-process=style/water" alt=""/>
                        </div>
                        <div className="swiper-slide">
                            <img src="https://img2.epetbar.com/2019-11/26/18/57e904f01842f5a972d7702570387d5e.jpg?x-oss-process=style/water" alt=""/>
                        </div>
                        <div className="swiper-slide">
                            <img src="https://img2.epetbar.com/2019-09/03/15/8376637e1d6630a6f467e914e0fb73b2.png?x-oss-process=style/water" alt=""/>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>     

                {/*menu  */}
                <div className="menu">
                    {
                         menu.map((item,index)=>(
                         <li  key={index}>
                             <NavLink to={item.path}>
                                 <img src={item.img} alt=""/>
                             </NavLink>
                        </li>
                        ))
                    }
                </div>
                
                <Sail/>
               
                <List/>

                 {/* 底部 */}
                 <div className="touch">
                    <ul>
                        <li className="active">触屏版</li>
                        <li>手机客户端</li>
                        <li>关于我们</li>
                        <li>联系我们</li>
                    </ul>
                    <span>© wap.epet.com 版权：重庆易宠科技有限公司</span>
                </div>

                <div className="top"></div>
            </Content>
            </PageContainer>
        )
    }
    componentDidMount(){
          new Swiper ('.swiper1', {
            // direction: 'vertical',
            loop: true, // 循环模式选项
            autoplay:true,
            // 如果需要分页器
            showPagination: true,
            pagination: {
              el: '.swiper-pagination',
            },
          })   
          window.addEventListener('scroll',this.handleScroll,true)
        
    }
    handleScroll(){
        console.log(document.documentElement.scrollTop)
    }
}

export default Selected
// WithRouter(Selected)