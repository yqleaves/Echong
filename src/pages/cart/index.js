import React,{Component} from 'react';
import Header from "../../common/header"
import {Content} from "./styled"
import {Link} from "react-router-dom"

class Cart extends Component{
    constructor(){
        super();
        this.state = {
            title: "购物车"
        }
    }
    render(){
        return(
            <Content>
                <Header title={this.state.title}></Header>
                <div className="check">
                    <i></i>
                    <span>E宠西部中央仓</span>
                    <b>？</b>
                </div>

                <div className="shop-box">
                    <div className="item">
                        <i></i>
                        <img src="https://img2.epetbar.com/2017-07/12/17/f62eb7cbf1413f6006886173a5e408a5.jpg@!200w-b" alt=""/>
                        <div className="info">
                            <h3>美国酷极Kyjen 绿色玲珑球狗玩具 5.5*5.5*5cm</h3>
                            <div className="price">
                                <span>￥<i>29.00</i></span>
                                <div className="button">
                                    <span>-</span>
                                    <div>1</div>
                                    <span>+</span>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
                <div className="shop-box">
                    <div className="item">
                        <i></i>
                        <img src="https://img2.epetbar.com/2017-07/12/17/f62eb7cbf1413f6006886173a5e408a5.jpg@!200w-b" alt=""/>
                        <div className="info">
                            <h3>美国酷极Kyjen 绿色玲珑球狗玩具 5.5*5.5*5cm</h3>
                            <div className="price">
                                <span>￥<i>29.00</i></span>
                                <div className="button">
                                    <span>-</span>
                                    <div>1</div>
                                    <span>+</span>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
                <div className="shop-box">
                    <div className="item">
                        <i></i>
                        <img src="https://img2.epetbar.com/2017-07/12/17/f62eb7cbf1413f6006886173a5e408a5.jpg@!200w-b" alt=""/>
                        <div className="info">
                            <h3>美国酷极Kyjen 绿色玲珑球狗玩具 5.5*5.5*5cm</h3>
                            <div className="price">
                                <span>￥<i>29.00</i></span>
                                <div className="button">
                                    <span>-</span>
                                    <div>1</div>
                                    <span>+</span>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
                <div className="shop-box">
                    <div className="item">
                        <i></i>
                        <img src="https://img2.epetbar.com/2017-07/12/17/f62eb7cbf1413f6006886173a5e408a5.jpg@!200w-b" alt=""/>
                        <div className="info">
                            <h3>美国酷极Kyjen 绿色玲珑球狗玩具 5.5*5.5*5cm</h3>
                            <div className="price">
                                <span>￥<i>29.00</i></span>
                                <div className="button">
                                    <span>-</span>
                                    <div>1</div>
                                    <span>+</span>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>

                <div className="footer">
                    <div className="left">
                        <i></i>
                        <div className="total">
                            <span>总额:</span>
                            <p>￥<i>106.00</i></p>
                        </div>
                    </div>
                    <Link to="/">去结算(<i>2</i>)</Link>
                </div>
            </Content>
        )
    }
}

export default Cart