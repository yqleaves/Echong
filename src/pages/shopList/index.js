import React from "react"
import {Content} from "./styled"
import Header from "../../common/header"

class ShopList extends React.Component{
    constructor(){
        super();
        this.state = {
            title: "商品列表"
        }
    }
    render(){
        return(
            <Content>
                <Header title={this.state.title}></Header>
                <div className="search">
                    <div className="input">
                        <i></i>
                        点击搜索商品
                    </div>
                </div>

                {/* 排序 */}
                <div className="nav">
                    <li className="active">
                        <span>默认</span>
                    </li>
                    <li>
                        <span>销量</span>
                    </li>
                    <li>
                        <span>价格</span>
                    </li>
                    <li>
                        <span>筛选</span>
                    </li>
                </div>

                <ul>
                    <li>
                        <a href="/detail">
                            <img className="img" src="https://img.epetht.com/nowater/2016-08/12/16/143b7ea7399146885f19d11af44d5a27.jpg" alt=""/>
                            <img src="https://img.epetht.com/goods/sales/20190814141118_611664.jpg?@!300w-b" alt=""/>
                            <div className="item">
                                <h1>
                                    <img src="http://static.epetht.com/static_wap/appmall/lib/goods/epethk-goodslist.png?version=2016071303" alt=""/>
                                    天衡宝Natural Balance限定系列 鸭薯配方幼犬粮 4.5磅/2.04kg（LID Potato & Duck PUPPY Formula Dry Dog Food4.5lb）
                                </h1>
                                <div className="blank"></div>
                                <p>￥180.00</p>
                                <div className="sail">
                                    <span>互动:853(92%好评)</span>
                                    <span>30天销量:4136</span>
                                </div>
                            </div>
                        </a> 
                    </li>
                    <li>
                        <a href="/detail">
                            <img className="img" src="https://img.epetht.com/nowater/2016-08/12/16/143b7ea7399146885f19d11af44d5a27.jpg" alt=""/>
                            <img src="https://img.epetht.com/goods/sales/20190814141118_611664.jpg?@!300w-b" alt=""/>
                            <div className="item">
                                <h1>
                                    <img src="http://static.epetht.com/static_wap/appmall/lib/goods/epethk-goodslist.png?version=2016071303" alt=""/>
                                    天衡宝Natural Balance限定系列 鸭薯配方幼犬粮 4.5磅/2.04kg（LID Potato & Duck PUPPY Formula Dry Dog Food4.5lb）
                                </h1>
                                <div className="blank"></div>
                                <p>￥180.00</p>
                                <div className="sail">
                                    <span>互动:853(92%好评)</span>
                                    <span>30天销量:4136</span>
                                </div>
                            </div>
                        </a> 
                    </li>
                    <li>
                        <a href="/detail">
                            <img className="img" src="https://img.epetht.com/nowater/2016-08/12/16/143b7ea7399146885f19d11af44d5a27.jpg" alt=""/>
                            <img src="https://img.epetht.com/goods/sales/20190814141118_611664.jpg?@!300w-b" alt=""/>
                            <div className="item">
                                <h1>
                                    <img src="http://static.epetht.com/static_wap/appmall/lib/goods/epethk-goodslist.png?version=2016071303" alt=""/>
                                    天衡宝Natural Balance限定系列 鸭薯配方幼犬粮 4.5磅/2.04kg（LID Potato & Duck PUPPY Formula Dry Dog Food4.5lb）
                                </h1>
                                <div className="blank"></div>
                                <p>￥180.00</p>
                                <div className="sail">
                                    <span>互动:853(92%好评)</span>
                                    <span>30天销量:4136</span>
                                </div>
                            </div>
                        </a> 
                    </li>
                    <li>
                        <a href="/detail">
                            <img className="img" src="https://img.epetht.com/nowater/2016-08/12/16/143b7ea7399146885f19d11af44d5a27.jpg" alt=""/>
                            <img src="https://img.epetht.com/goods/sales/20190814141118_611664.jpg?@!300w-b" alt=""/>
                            <div className="item">
                                <h1>
                                    <img src="http://static.epetht.com/static_wap/appmall/lib/goods/epethk-goodslist.png?version=2016071303" alt=""/>
                                    天衡宝Natural Balance限定系列 鸭薯配方幼犬粮 4.5磅/2.04kg（LID Potato & Duck PUPPY Formula Dry Dog Food4.5lb）
                                </h1>
                                <div className="blank"></div>
                                <p>￥180.00</p>
                                <div className="sail">
                                    <span>互动:853(92%好评)</span>
                                    <span>30天销量:4136</span>
                                </div>
                            </div>
                        </a> 
                    </li>
                </ul>
            </Content>
        )
    }
}

export default ShopList