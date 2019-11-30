import styled from "styled-components"

export const Content = styled.div`
    overflow: auto;
    padding-bottom: .52rem;
    background: #f5f5f5;
    margin-top: .5rem;
    .swiper-container {
        width: 100%;
        height: 3.75rem;
        display: flex;
        margin-bottom:1px;
        position: relative;
        overflow: hidden;
        .swiper-wrapper{
            display:flex;
        }
        .swiper-slide {
            text-align: center;
            font-size: 18px;
            background: #fff;
            display: flex;
            justify-content: center;
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
    .info{
        height: .94rem;
        background: #fff;
        padding-bottom: .1rem;
        display: flex;
        flex-direction: column;
        padding: 0 .1rem;
        overflow: hidden;
        p{
            width: 100%;
            display: flex;
            height: .208rem;
            color:#333;
            font-size: .13rem;
        }
        p:nth-of-type(2){
            color: #e75656;
        }
        .price{
            height: .34rem;
            width: 100%;
            margin-top: .1rem;
            margin-left: .1rem;
            border-top: #e5e5e5 solid 1px;
            padding-right: .1rem;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            .left{
                width: 1.83rem;
                height: 100%;
                display: flex;
                align-items: center;
                span{
                    color: #ea5858;
                    font-size: .12rem;
                    display: flex;
                    align-items: center;
                    margin-right: .1rem;
                    i{
                        font-size: .2rem;
                    }
                }
                b{
                    font-size: .12rem;
                    color: #333;
                    text-decoration: line-through;
                    display: flex;
                }
            }
            img{
                width: .78rem;
                height: .25rem;
            }
        }
    }
    .proper{
        margin-top: .2rem;
        height: .42rem;
        padding: .1rem;
        display: flex;
        background: #fff;
        justify-content: space-between;
        align-items: center;
        span{
            width: 1.1rem;
            height: 100%;
            font-size: .13rem;
        }
        .norms{
            width: 2.2rem;
            font-size: .12rem;
            color: #999;
            text-align: right;
            span{
                margin-right: .2rem;
            }
        }
    }
    .buy{
        padding: .1rem;
        height: .52rem;
        background: #fff;
        display: flex;
        margin-top: .1rem;
        span{
            width: .71rem;
            height: 100%;
            font-size: .13rem;
        }
        .button{
            width: 1.08rem;
            border-radius: .1rem;
            height: .32rem;
            border: 1px solid #999;
            display: flex;
            justify-content: center;
            span{
                width: .3rem;
                height: .3rem;
                display: flex;
                justify-content: center;
                align-items: center;
                
            }
            div{
                width: .48rem;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: .12rem;
                border: 1px solid #999;
                border-top: none;
                border-bottom: none;
            }
        }
    }
    .box{
        width: 100%;
        height: .41rem;
        display: flex;
        border-top: 1px solid #f3f3f3;
        li{
            width: 33%;
            padding: .1rem 0;
            color: #666;
            font-size: .12rem;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #fff;
            img{
                width: .2rem;
                height: .2rem;
                margin-right: 5px;
            }
        }
    }
`

export const Footer = styled.div`
    height: .5rem;
    width:100%;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    button{
        width: 50%;
        height: 100%;
        background: #f03e3e;
        color: #fff;
        font-size: .15rem;
        text-align: center;
        border: none;
    }
    .left{
        padding: 4px;
        display: flex;
        width: 50%;
        background: #f3f3f3;
        div{
            width: 50%;
            height: 100%;
            display: flex;
            flex-direction: column;
            position: relative;
            img{
                margin: 5px auto 4px;
                width: .2rem;
                height: .19rem;
                display:flex;
            }
            span{
                width: 100%;
                font-size: .12rem;
                color: #999;
                height: .2rem;
                text-align: center;
            }
            i{
                width: .16rem;
                height: .16rem;
                position: absolute;
                padding: 2px 4px;
                top: 2px;
                line-height: .16rem;
                right: .26rem;
                border-radius: 8px;
                background: #f03e3e;
                color: #fff;
                font-size: 12px;
            }
        }
    }
`