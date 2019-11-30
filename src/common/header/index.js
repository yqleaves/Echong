import React, { Component, Fragment } from "react"
import { Link,withRouter } from "react-router-dom"
import { Head, Nav } from "./styled"

class Header extends Component {
    constructor(props) {
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
        this.handleShow = this.handleShow.bind(this)
    }
    render() {
        let { show, list } = this.state
        return (
            <Fragment>
                <Head>
                    <div className="back" onClick={this.handleBack.bind(this)}> </div>
                    <h2>{this.props.title}</h2>
                    <div className="news" onClick={this.handleShow}></div>
                </Head>
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
            </Fragment>

        )
    }
    handleBack(){
        console.log(this.props)
        this.props.history.goBack()
    }
    handleShow() {
        this.setState({
            show: !this.state.show
        })
    }
}

export default withRouter(Header)