import styled from "styled-components"

export const Content = styled.div`
    overflow: auto;
    border-top: 5px solid #f3f4f5;
    width: 100%;
    margin-top: .4rem;
    padding-bottom: .52rem;
    .title{
        height: .4rem;
        width: 100%;
        padding-top: .2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: .12rem;
        color: #999;
    }
    .list{
        min-height: 3rem;
        width: 100%;
        diplay: flex;
        padding: 0 5px;
        ul{
            width: 100%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            li{
                width:33%;
                padding: 0 5px;
                margin-top: .2rem;
                
            }
            a{
                width: 100%;
                diplay: flex;
                height: 100%;
                .img-box{
                    width: 100%;
                    height: .62rem;
                    background: #fff;
                    border: 1px solid #e2e2e2;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    img{
                        width: .8rem;
                        height: .4rem;
                    }
                }
                p{
                    height: .2rem;
                    width: 100%;
                    display: flex;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    color: #333;
                    font-size: .13rem;
                    margin-top: 5px;
                }
                span{
                    width: 100%;
                    height: .2rem;
                    color: #999;
                    font-size: .12rem;
                    align-items: center;
                    justify-content: center;
                    display: flex;
                   
                }
            }
        }
    }
`