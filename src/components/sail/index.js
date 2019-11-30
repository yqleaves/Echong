import React, { Component } from 'react'
import {Content} from "./styled"
import Swiper from "swiper"
import {NavLink} from "react-router-dom"

export default class Sail extends Component {
    render() {
        return (
            <Content>
                {/* guarantee */}
                <div className="guarantee">
                    <img src="https://img2.epetbar.com/2019-11/12/16/96737a4e9141f4cf31d455412b077a3d.jpg?x-oss-process=style/water" alt=""/>
                    <img src="https://img2.epetbar.com/2019-11/11/15/20dca16cc75000fee0f3366f15556013.jpg?x-oss-process=style/water" alt=""/>
                </div>
                {/* must */}
                <div className="must">
                    <div className="left">
                        <img src="https://img2.epetbar.com/2019-11/22/18/2ba78e8d92c409e749941ba6d59c0be5.gif?x-oss-process=style/water" alt=""/>
                    </div>
                    <div className="right">
                        <img src="https://img2.epetbar.com/2019-11/12/16/2c615b5be6a1efb33b0dc183d4fc9031.jpg?x-oss-process=style/water" alt=""/>
                        <img src="https://img2.epetbar.com/2019-11/12/16/32276bd49a0aa387cbd47f24270246ff.jpg?x-oss-process=style/water" alt=""/>
                        <img src="https://img2.epetbar.com/2019-11/12/16/0ae69af8893b47819ca64ddff4b0a430.jpg?x-oss-process=style/water" alt=""/>
                    </div>
                </div>
                <img src="https://img2.epetbar.com/2019-11/13/00/2fe511e37fd09462deae2091dbb0e6b4.gif?x-oss-process=style/water" alt=""/>

                {/* rob */}
                <div className="rob">
                    <div className="left">
                        <div className="title">
                            <img src="https://static.epetbar.com/static_wap/appmall/main/index_icon_berserk_mark_415.png?version=03" alt=""/>
                            
                        </div>
                        <div className="bottom">
                            <NavLink to="/">
                                <img src="https://img1.epetbar.com/goods/sales/20190807092047_677804.jpg?x-oss-process=style/fill&$1=200&$2=200" alt=""/>
                                <p>
                                    ￥<span>9.00</span>
                                </p>
                                <p>
                                    <span>￥90.00</span>
                                </p>
                            </NavLink>
                            <NavLink to="/">
                                <img src="https://img1.epetbar.com/2018-06/27/13/094f7a6e2fa9add93cb0ee8d22d497a9.jpg?x-oss-process=style/fill&$1=200&$2=200" alt=""/>
                                <p>
                                    ￥<span>9.00</span>
                                </p>
                                <p>
                                    <span>￥90.00</span>
                                </p>
                            </NavLink>
                        </div>
                    </div>

                    <div>
                        <div className="title">
                            <img src="https://static.epetbar.com/static_wap/appmall/main/index_icon_egroup_415.png?version=03" alt=""/>
                            
                        </div>
                        <div className="bottom">
                            <NavLink to="/">
                                <img src="https://img1.epetbar.com/common/upload/commonfile/2019/010/08/152811_670383.jpg?x-oss-process=style/fill&$1=200&$2=200" alt=""/>
                                <p>
                                    ￥<span>9.00</span>
                                </p>
                                <p>
                                    <span>￥90.00</span>
                                </p>
                            </NavLink>
                            <NavLink to="/">
                                <img src="https://img1.epetbar.com/goods/sales/upload_file_2019388851.jpg?x-oss-process=style/fill&$1=200&$2=200" alt=""/>
                                <p>
                                    ￥<span>9.00</span>
                                </p>
                                <p>
                                    <span>￥90.00</span>
                                </p>
                            </NavLink>
                        </div>
                    </div>
                </div>
                
                <img src="https://img2.epetbar.com/2019-09/25/11/908e62d71e648b19b2017a0344323d96.gif?x-oss-process=style/water" alt=""/>
                {/* special */}
                <div className="special">
                    <img src="https://img2.epetbar.com/nowater/2019-07/12/14/1f63b158360efcf3d9b0f008ea7fa77b.png" alt=""/>
                    <img src="https://img2.epetbar.com/nowater/2018-10/18/18/01c98c8320c7f1567ac409a7a847607d.png" alt=""/>
                </div>

                 {/* 品牌特卖 */}
               <div className="swiper-container swiper2">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <img src="http://img2.epetbar.com/nowater/showcase/2019/11/26/090620635.jpg@!water" alt=""/>
                            <div className="img-box">
                            <img src="http://img2.epetbar.com/nowater/showcase/2019/11/26/090538437.jpg@!water" alt=""/>
                            <img src="http://img2.epetbar.com/nowater/showcase/2019/11/26/090647364.jpg@!water" alt=""/>
                            </div>
                        </div>
                        <div className="swiper-slide">
                        <img src="http://img2.epetbar.com/nowater/showcase/2019/11/26/090620635.jpg@!water" alt=""/>
                            <div className="img-box">
                            <img src="http://img2.epetbar.com/nowater/showcase/2019/11/26/090538437.jpg@!water" alt=""/>
                            <img src="http://img2.epetbar.com/nowater/showcase/2019/11/26/090647364.jpg@!water" alt=""/>
                            </div>
                        </div>
                        <div className="swiper-slide">
                        <img src="http://img2.epetbar.com/nowater/showcase/2019/11/26/090620635.jpg@!water" alt=""/>
                            <div className="img-box">
                            <img src="http://img2.epetbar.com/nowater/showcase/2019/11/26/090538437.jpg@!water" alt=""/>
                            <img src="http://img2.epetbar.com/nowater/showcase/2019/11/26/090647364.jpg@!water" alt=""/>
                            </div>
                        </div>
                        <div className="swiper-slide">
                        <img src="http://img2.epetbar.com/nowater/showcase/2019/11/26/090620635.jpg@!water" alt=""/>
                            <div className="img-box">
                            <img src="http://img2.epetbar.com/nowater/showcase/2019/11/26/090538437.jpg@!water" alt=""/>
                            <img src="http://img2.epetbar.com/nowater/showcase/2019/11/26/090647364.jpg@!water" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>   
                
                {/* e宠国际 */}
                <div className="special">
                    <img src="https://img2.epetbar.com/nowater/2018-10/18/18/c529a10ea2355ecf3c72258de10701ae.png" alt=""/>
                    <img src="https://img2.epetbar.com/nowater/2018-10/18/18/01c98c8320c7f1567ac409a7a847607d.png" alt=""/>
                </div>
                <img className="img" src="https://img2.epetbar.com/2019-08/22/11/1a7c100a1b90c049bea27775ad023a07.jpg?x-oss-process=style/water" alt=""/>

                {/* 猜你喜欢 */}
                <div className="special">
                    <img src="https://img2.epetbar.com/nowater/2018-10/18/20/3fbb022a3225b959f51312c47f378016.png" alt=""/>
                    
                </div>
              
            </Content>
        )
    }
    componentDidMount(){
        new Swiper ('.swiper2', {
            // direction: 'vertical',
            showPagination: true,
            pagination: {
              el: '.swiper-pagination',
            },
          })
    }
}
