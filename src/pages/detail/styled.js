import styled from "styled-components"

export const Content = styled.div`
    overflow: auto;
    .header{
        display: flex;
        position: fixed;
        height: .5rem;
        width: 100%;
        border-bottom: 1px solid #f5f5f5;
        top: 0;
        left: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #fff;
        z-index: 999;
        .back{
            width: .35rem;
            height: .35rem;
            background: url( https://wap.epet.com/app/img/topIco.bc556dcf.png) 0 0 no-repeat;
            background-size: .35rem auto;
            background-position: 0 0;
        }
        .title{
            width: 2.87rem;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            a{
                width: .38rem;
                height: 100%;
                border-bottom: 2px solid #fff;
                font-size: .19rem;
                margin: 0 5px;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #333;
            }
            .active{
                border-bottom: 2px solid #f03e3e;
            }
        }
        .news{
                width: .35rem;
                height: .35rem;
                background: url( https://wap.epet.com/app/img/topIco.bc556dcf.png) 0 0 no-repeat;
                background-size: .35rem auto;
                background-position: 0 -.7rem;
        }
    }

`


export const Nav = styled.div`
    width: 100%;
    margin-top: .5rem;
    background: #fff;
    border-bottom: 1px solid #d7d7d7;
    height: .66rem;
    padding: .1rem 0;
    flex-direction: row;
    justify-content: space-between;
    li{
        display: flex;
    }
    a{
        width: 25%;
        height: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        img{
            width: .25rem;
            height: .25rem;
            display: flex;
        }
        span{
            width: 100%;
            height: .2rem;
            color: #666;
            font-size: .14rem;
            text-align: center;
        }
    }
`