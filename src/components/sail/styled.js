import styled from "styled-components"

export const Content = styled.div`
    .swiper2{
        height: 3.87rem;
        .swiper-slide{
            display: flex;
            padding: 0 .1rem;
            flex-direction: column;
            img:nth-of-type(1){
                height: 46%;
                width: 100%;
                border-radius: .2rem;
            }
            .img-box{
                width: 100%;
                height: 46%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                img{
                    width: 48%;
                    height: 100%;
                    margin-top: .1rem;
                    border-radius: .2rem;
                }
            }
        }
       
    }
    .guarantee{
        height: 1.53rem;
        display: flex;
        flex-direction: column;
        background: pink;
        img:nth-of-type(1){
            height: .68rem;
        }
        img:nth-of-type(2){
            height: .85rem;
        }
    }
    .must{
        height:2.115rem;
        display: flex;
        justify-content: space-between;
        div{
            width: 50%;
        }
        .left{
            img{
                width:100%;
                height:100%;
            }
        }
        .right img{
            height:33.3%;
            width: 100%;
        }
    }
    img{
        width: 100%;
        height: 1.08rem;
    }
    .rob{
        height: 1.66rem;
        display: flex;
        margin: 0 .1rem;
        margin-bottom: .2rem;
        box-shadow: 1px 2px .25rem 0px rgba(0,0,0,0.1);
        border-radius: .15rem;
        div{
            width: 50%;
            height: 100%;
            display: flex;
            padding: .15rem 0;
            flex-direction: column;
        }
        .left{
            border-right: 1px dotted #f1f1f1;
        }
        .title{
            height: .256rem;
            margin: 0 5px 0 .1rem;
            display: flex;
            flex-direction: row;
            align-items: center;
            img{
                width: .6rem;
                height: .16rem;
                display: flex;
            }
        }
        .bottom{
            padding-right: .1rem;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: row;
            padding-bottom: 0;
            a{
                margin-left: .1rem;
                width: 50%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                img{
                    width: .59rem;
                    height: .59rem;
                    display: flex;
                }
                p{
                    width: 100%;
                    height: .17rem;
                    display: flex;
                    justify-content: center;
                    font-size: .1rem;
                    color: #ff5757;
                    align-items: center;
                    span{
                        font-size: .14rem;
                        font-weight: bold;
                    }
                }
                p:nth-of-type(2){
                    span{
                        color: #999;
                        font-size: .12rem;
                        text-decoration: line-through;
                    }
                } 
            }
        }
    }
    img:nth-of-type(2){
        height: .8rem;
    }
    .special{
        height: .26rem;
        width:100%;
        display: flex;
        padding: 0 .1rem;
        justify-content: space-between;
        align-items: center;
        margin: .2rem 0;
        img:nth-of-type(1){
            height: .19rem;
            width: 1.4rem;
            display: flex;
        }
        img:nth-of-type(2){
            width: .38rem;
            height: .22rem;
        }
    }
    .img{
        height: 1.69rem;
        display: flex;
        padding: 0 .1rem;
        border-radius: .2rem;
        margin: .1rem 0;
    }
    
`