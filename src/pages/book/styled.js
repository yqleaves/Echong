import styled from "styled-components"

export const Content = styled.div`
    overflow: auto;
    margin-top: .5rem;
    .nav-box{
        height: .77rem;
        width: 100%;
        overflow: hidden;
        .dog{
            margin: .1rem .15rem;
            height: .3rem;
            display: flex;
            justify-content: space-between;
            align-items: center;.change{
                width: .57rem;
                height: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                img:nth-of-type(1){
                    height: .16rem;
                    width: .13rem;
                }
                img:nth-of-type(2){
                    width: 6px;
                    height: 4px;
                }
                span{
                    font-size: .14rem;
                    width: .28rem;
                    color: #333;
                }
            }
            .input{
                width: 2.42rem;
                height: 100%;
                border-radius: .3rem;
                padding: 0 .15rem;
                background: #f0f0f0;
                color: #666;
                font-size: .11rem;
                display: flex;
                align-items: center;
                img{
                    width: .14rem;
                    height: .14rem;
                    margin-right: 6px;
                }
            }
            img{
                width: .24rem;
                height: .23rem;
            }
        }
        ul{
            width: 100%;
            height: .36rem;
            display: flex;
            justify-content: center;
            align-items: center;
            li{
                width: 25%;
                height: 100%;
                display: flex;
                a{
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    font-size: .12rem;
                    color: #333;
                    flex-direction: column;
                    b{
                        width: .145rem;
                        height: 5px;
                        background: #fff;

                    }
                }
                .active{
                    font-size: .15rem;
                    font-weight: bold;
                    b{
                        width: .145rem;
                        height: 5px;
                        background: #41C856;
                        border-radius: 5px
                    }
                }
                
            }
        }
    }
`