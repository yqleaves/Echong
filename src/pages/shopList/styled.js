import styled from "styled-components"

export const Content = styled.div`
    overflow: auto;
    margin-top: .5rem;
    padding-bottom: .52rem;
    .search{
        width: 100%;
        padding: .1rem;
        height: .6rem;
        border-bottom: 1px solid #e7e7e7;
        .input{
            height: 100%;
            width: 100%;
            background: #f6f6f6;
            border-radius: 5px;
            display: flex;
            padding: 0 .1rem;
            font-size: .14rem;
            align-items: center;
            color: #999;
            i{
                width: .2rem;
                margin-top: -2px;
                height: .2rem;
                margin-right: .1rem;
                display: flex;
                background: url(https://static.epetht.com/static_wap/epetapp/pages/goods_list/images/brands-ico.png) no-repeat;
                background-position: -.51rem -.76rem;
                background-size: 2rem auto;
            }
        }
    }
    .nav{
        height: .42rem;
        width: 100%;
        display: flex;
        border-bottom: 1px solid #e7e7e7;
        li{
            width: 25%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            span{
                width: .35rem;
                height: .19rem;
                font-size: .14rem;
            }
        }
        .active{
            color: #ff5757;
        }
        li:nth-of-type(4)::after{
            background: url(https://static.epetht.com/static_wap/epetapp/pages/goods_list/images/brands-ico.png) no-repeat -4px -14px;
            width: .15rm;
            height: .14rem;
            background-position: -43px -17px;
        }
    }
    ul{
        display: flex;
        flex-direction: column;
        li{
            padding: .1rem;
            display: flex;
            border-bottom: 1px solid #e7e7e7;
            height: 1.24rem;
            width: 100%;
        }
        a{
            width: 100%;
            height: 100%;
            display: flex;
            flex-shrink: 0;
            position: relative;
            .img{
                position: absolute;
                top: -3px;
                left: 0;
                width: .3rem;
                height: .27rem;
                border-radius: 50%;
            }
            img{
                width: 1rem;
                height: 1rem;
            }
            .item{
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                h1{
                    width: 100%;
                    color: #333;
                    height: .32rem;
                    font-size: .12rem;
                    overflow: hidden;
                    img{
                        width: auto;
                        height: .15rem;
                        margin-top: -3px;
                        display: inline-block;
                    }
                }
                .blank{
                    height: .25rem;
                    width: 100%;
                    margin-top: 5px;
                }
                p{
                    width: 100%;
                    height: .19rem;
                    font-size: .14rem;
                    color: #ff0000;
                }
                .sail{
                    width: 100%;
                    display: flex;
                    span{
                        color: #999;
                        font-size: .12rem;
                        margin-right: 5px;
                    }
                }
            }
        }
    }
`