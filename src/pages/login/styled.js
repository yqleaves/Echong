import styled from "styled-components"

export const Content = styled.div`
    overflow: auto;
    .header{
        height: .5rem;
        width: 100%;
        border-bottom: 1px solid #f5f5f5;
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
    }
    .login{
        height: 3.08rem;
        width:100%;
        display: flex;
        flex-direction: column;
        padding: .1rem .4rem;
        h3{
            height: .32rem;
            margin: .1rem 0;
            width: 100%;
            color: #333;
            font-size: .2rem;
            font-weight: bold;
        }
        input{
            height: .48rem;
            width: 100%;
            border-bottom: 1px solid #d0d0d0;
            margin-bottom: .1rem;
        }
        button{
            background: #f0f0f0;
            color: #bfbfbf;
            width: 100%;
            line-height: .5rem;
            margin-top: .37rem;
            border-radius: .3rem;
            font-size: .16rem;
            border: none;
        }
        p{
            width: 100%;
            margin-top: .15rem;
            color: #333;
            font-size: .12rem;
        }
    }
    .else{
        width: 100%;
        height: 1.5rem;
        padding: .1rem .4rem;
        margin-top: 1rem;
        img{
            width: 100%;
            height: .105rem;
        }
        .way{
            height: .3rem;
            margin: .2rem 0;
            display: flex;
            width: 100%;
            li{
                width: 50%;
                height: 100%;
                display: flex;
                justify-content: center;
                img{
                    width: .3rem;
                    height: .3rem;
                }
            }
        }
        p{
            width: 100%;
            height: .16rem;
            font-size: .12rem;
            justify-content: center;
            display: flex;
            align-items: center;
            span{
                color: #ff5757;
            }
        }
    }
`