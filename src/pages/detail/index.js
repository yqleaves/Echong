import React from "react"
import {Content,Nav} from "./styled"
import {NavLink,withRouter} from "react-router-dom"
import {NoTabBarRoute} from "router"
import {Link} from "react-router-dom"

class Detail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show: false,
            list: [
                {
                    text: "首页",
                    src: 'https://static.epetbar.com/mpet/images/head_icon1.png',
                    path: "/selected"
                },
                {
                    text: "商品分类",
                    src: 'https://static.epetbar.com/mpet/images/head_icon2.png',
                    path: "/kind"
                },
                {
                    text: "购物车",
                    src: 'https://static.epetbar.com/mpet/images/head_icon4.png',
                    path: "/cart"
                },
                {
                    text: "我的e宠",
                    src: 'https://static.epetbar.com/mpet/images/head_icon5.png',
                    path: "/mine"
                },
            ]
        }
    }
    render(){
        let {list,show} = this.state
        return(
            <Content>
                <div className="header">
                    <div className="back" onClick={this.handleBack.bind(this)}> </div>
                    <div className="title">
                        {
                            NoTabBarRoute[1].children.map(item=>(
                                <NavLink to={item.path} key={item.path}>
                                    {item.text}
                                </NavLink>
                            ))
                        }
                       
                    </div>
                    <div className="news"  onClick={this.handleShow.bind(this)}>
                    </div>
                </div>
                <Nav style={{ display: show ? 'block' : 'none', transition: '.3s' }}>
                        <li>
                            {
                                list.map(item => (
                                    <Link to={item.path} key={item.path}>
                                        <img src={item.src} alt=""/>
                                        <span>{item.text}</span>
                                    </Link>
                                ))
                            }
                        </li>
                    </Nav>
            </Content>
        )
    }
    handleShow() {
        this.setState({
            show: !this.state.show
        })
    }
    handleBack(){
        this.props.history.goBack()
    }
}

export default withRouter(Detail)