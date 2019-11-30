import styled from "styled-components"

export const Content = styled.div`
    padding: 0 .1rem;
    display: flex;
    min-height: 5rem;
    ul{
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: space-between;
        flex-wrap: wrap;
        li{
            display: flex;
            width: 48.5%;
            height: 2.56rem;
            border: 1px solid #f1f1f1;
            border-radius: .10rem;
            padding: .15rem;
            margin-bottom: .1rem;
            a{
                display: flex;
                width: 100%;
                height: 100%;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                img{
                    width: 1.406rem;
                    height: 1.406rem;
                    display: flex;
                }
                p{
                    height: .32rem;
                    margin: .05rem 0;
                    color: #333;
                    font-size: .12rem;
                }
                .price{
                    height: .26rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;
                    span{
                        width: .54rem;
                        display: flex;
                        color:#ff5757;
                        font-size: .14rem;
                        font-weight: bold;
                    }
                    img{
                        display: flex;
                        width: .26rem;
                        height: .26rem;
                    }
                }
            }
        }
    }
`