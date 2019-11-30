import React from "react"
import {Content,Footer} from "./styled"
import Swiper from "swiper"

class Shop extends React.Component{
    render(){
        return (
           <Content>
                 {/*轮播图  */}
                 <div className="swiper-container swiper1">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <img src="https://img2.epetbar.com/2015-12/26/16/af79a45b09be35597e0a728624d2ea76.jpg?x-oss-process=style/cut&$1=500&$2=500" alt=""/>
                        </div>
                        <div className="swiper-slide">
                            <img src="https://img2.epetbar.com/2015-12/26/16/004c94e62b3dc285f369275247aae49e.jpg?x-oss-process=style/cut&$1=500&$2=500" alt=""/>
                        </div>
                        <div className="swiper-slide">
                            <img src="https://img2.epetbar.com/2015-12/26/16/959df1ed8e96b6dc8067b4e9d3ebe68a.jpg?x-oss-process=style/cut&$1=500&$2=500" alt=""/>
                        </div>
                        <div className="swiper-slide">
                            <img src="https://img2.epetbar.com/2015-12/26/16/69561ab8e624b144934a0fa9671b6cf5.jpg?x-oss-process=style/cut&$1=500&$2=500" alt=""/>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>

                {/* 详情 */}
                <div className="info">
                    <p>美国原装耐龙Nylabone 大号手榴弹漏食玩具10.5cm</p>
                    <p>风靡欧美 天然无毒乳胶 磨牙健齿 保护口腔 橡胶洁齿又耐咬</p>
                    <div className="price">
                        <div className="left">
                            <span>￥<i>98.00</i></span>
                            <b>￥102.00</b>
                        </div>
                        <img src="https://static.epetbar.com/static_wap/appmall/lib/goods/quality_assurance.png" alt=""/>
                    </div>
                </div>

                {/* 超值搭配 */}
                <div className="proper">
                    <span>超值搭配</span>
                    <div className="norms">
                        <span>Nylabone 洁齿玩具 大号 2+ </span> >
                    </div>
                </div>


                {/* 购买数量 */}

                <div className="buy">
                    <span>购买数量</span>
                    <div className="button">
                        <span>-</span>
                        <div>1</div>
                        <span>+</span>
                    </div>
                </div>

                {/* 正品保证 */}
                <div className="box">
                    <li>
                        <img src="https://static.epetbar.com/static_wap/appmall/lib/goods/qualityassurance.png" alt=""/>
                        正品保证
                    </li>
                    <li>
                        <img src="https://static.epetbar.com/static_wap/appmall/lib/goods/freeshipping.png" alt=""/>
                        99元包邮
                    </li>
                    <li>
                        <img src="https://static.epetbar.com/static_wap/appmall/lib/goods/thirtydays.png" alt=""/>
                        30天退货
                    </li>
                </div>

                <Footer>
                    <div className="left">
                        <div>
                            <img src="https://static.epetbar.com/static_wap/epetapp/pages/goods_detail/images/s1.png" alt=""/>
                            <span>收藏</span>
                        </div>
                        <div>
                            <img src="https://static.epetbar.com/static_wap/epetapp/pages/goods_detail/images/car.png" alt=""/>
                            <span>购物车</span>
                            <i>2</i>
                        </div>
                    </div>
                    <button>加入购物车</button>
                </Footer>
           </Content>
        )
    }
    componentDidMount(){
        new Swiper ('.swiper1', {
            // direction: 'vertical',
            // loop: true, // 循环模式选项
            // autoplay:true,
            // 如果需要分页器
            showPagination: true,
            pagination: {
              el: '.swiper-pagination',
            },
          })       
    }
}

export default Shop