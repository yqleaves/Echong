import styled from "styled-components"

export const Content = styled.div`
    overflow: auto;
    margin-top: .5rem;
    padding-bottom: .52rem;
    .set{
        height: 2.07rem;
        width: 100%;
        display: flex;
        background-image: url(https://static.epetbar.com/static_web/wap/src/images/background/backgroundV420.jpg);
        background-color: #f4f4f4;
        overflow: hidden;
        flex-direction: column;
        margin-bottom: .4rem;
        .icon{
            height: .42rem;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: .15rem;
            padding: 0 .15rem;
            img{
                width: .24rem;
                height: .24rem;
            }
        }
        .potrait{
            display: flex;
            height: .7rem;
            width: 100%;
            padding: 0 .1rem;
            margin: .3rem 0;
            align-items: center;
            img{
                width: .7rem;
                height: .7rem;
                margin-right: .1rem;
            }
            .grade{
                width: 2.75rem;
                height: .26rem;
                display:flex;
                align-items: center;
                span{
                    width: .32rem;
                    height: .2rem;
                    color: #fff;
                    font-size: .16rem;
                }
                i{
                    width: .12rem;
                    height: 100%；
                    color: #fff;
                    font-size: .16rem;
                    text-align: center;
                }
            }
        }
        .vip{
            height: .36rem;
            width: 100%;
            padding: 0 .1rem;
            ul{
                width: 100%;
                height: 100%;
                display: flex;
                background: #252525;
                border-radius: .15rem .15rem 0 0;
                padding: 5px .2rem 5px 0;
                align-items: center;
                img{
                    width:.638rem;
                    height: .15rem;
                    margin-left: .2rem;
                }
                img:nth-of-type(4){
                    height: .1rem;
                }
            }
        }
    }
    .order{
        height: 1.17rem;
        width: 100%;
        display: flex;
        padding: 0 .1rem;
        margin-bottom: .2rem;
        .box{
            box-shadow: 1px 2px .25rem 0px rgba(0,0,0,0.1);
            border-radius: .15rem;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            background: #fff;
            .title{
                height: .356rm;
                padding: .1rem .1rem 0;
                font-size: .16rem;
                font-weight: bold;
            }
            .list{
                width: 100%;
                height: .6145rem;
                margin-top: .2rem;
                padding-bottom: .1rem;
                display:flex;
                justify-content: space-between;
                li{
                    width: 20%;
                    height: 100%;
                    padding: 0 8px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    img{
                        width: .2476trm;
                        height: .2476rem;
                        display: flex;
                    }
                    span{
                        width: 100%;
                        height: .19rem;
                        color: #333;
                        font-size: .12rem;
                        margin-top: 5px;
                        text-align: center;
                    }
                }
            }
            .list2{
                display: flex;
                flex-wrap: wrap;
                min-height: 1rem;
                padding: .1rem;
                padding-top: 0;
                li{
                    width: 25%;
                    height: .498rem;
                    padding: 0 5px;
                    margin-bottom: .25rem;
                    i{
                        width: 100%;
                        height: .256rem;
                        font-size: .14rem;
                        font-weight: bold;
                        color: #ff5757;
                        line-height: .256rem;
                        text-align: center;
                    }
                }
            }
        }
    }
    .img{
        width: 100%;
        height: .8rem;
        margin-bottom: .2rem;
    }
    .server{
        height: 2.75rem;
    }
`