import styled from "styled-components"

export const Content = styled.div`
    overflow: auto;
    padding-botom: .52rem;
    margin-top: .5rem;
    .check{
        height: .41rem;
        width: 100%;
        padding: .1rem;
        display: flex;
        border-bottom: 1px solid #ebebeb;
        i{
            width: .2rem;
            height: .2rem;
        }
        span{
            width: 1.04rem;
            color: #333;
            font-size: .15rem;
            height: 100%;
            display: flex;
            padding-right; 5px;
        }
        b{
            width: .18rem;
            height: .18rem;
            color: #ecb44b;
            background: #fbeacf;
            border: 1px solid #fbeacf;
            border-radius: 50%;
            display: flex;
            font-size: .13rem;
            justify-content: center;
            align-items: center;
            font-weight: bold;
            text-align: center;
        }
    }
    .shop-box{
        width: 100%;
        display: flex;
        padding-left: .1rem;
        height: 1.06rem;
        border-bottom: 1px solid #f5f5f5;
    }
    .item{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        padding: .1rem 0;
        padding-right: .1rem;
        justify-content: space-between;
        i{
            width: .2rem;
            height: .2rem;
        }
        img{
            width: .85rem;
            height: .85rem;
        }
        .info{
            height: 100%;
            width: 2.45rem;
            display: flex;
            flex-direction: column;
            h3{
                width: 100%;
                height: .32rem;
                color: #333;
                font-size: .12rem;
            }
            .price{
                width: 100%;
                margin-top: .1rem;
                height: .224rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                span{
                    width: .49rem;
                    height: 100%;
                    color: #f05757;
                    font-size: .12rem;
                    display: flex;
                    align-items: center;
                    i{
                        font-size: .15rem;
                        font-weight: bold;
                    }
                }
                .button{
                    width: .96rem;
                    height: .2rem;
                    border-radius: .3rem;
                    border: 1px solid #333;
                    overflow: hidden;
                    display: flex;
                    div{
                        width: .32rem;
                        height: .2rem;
                        border: 1px solid #333;
                        border-top: none;
                        border-bottom: none;
                        justify-content: center;
                        align-items: center;
                        display: flex;
                        font-size: .14rem;
                    }
                    span{
                        width: .32rem;
                        height: .2rem;
                        color: #333;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        fon-size: .18rem;
                    }
                }
            }
           
        }
    }
    .footer{
        width: 100%;
        height: .6rem;
        positiom: fixed;
        bottom: 0;
        left: 0;
        border-top: 1px solid #f3f3f3;
        padding: .1rem;
        display: flex;
        justify-content: space-between;
        .left{
            width: 1.22rem;
            height: 100%;
            display: flex;
            .total{
                width: .97rem;
                height: 100%;
                display: flex;
                align-items: center;
                padding: .1rem 0;
                span{
                    width: .42rem;
                    height: 100%;
                    font-size: .14rem;
                    color: #666;
                }
                p{
                    color: #f05757;
                    font-size: .12rem;
                    display: flex;
                    align-items: center;
                    i{
                        font-size: .14rem;
                        font-weight: bold;
                    }
                }
            }
            i{
                width: .2rem;
                height: .2rem;
                display: flex;
            }
        }
        a{
            width: .80rem;
            height: 100%；
            background: #41c856;
            color: #fff;
            border-radius: .4rem; 
            font-size: .14rem;
            display: flex;
            justify-content: center;
            align-items: center;
            i{
                font-size: .14rem;
            }
        }
    }
`