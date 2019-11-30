import styled from "styled-components"

export const Footer = styled.div`
    width: 100%;
    height: .52rem;
    position: fixed;
    bottom: 0;
    left: 0;
    border-top: 1px solid #e7e7e7;
    z-index: 888;
    background: #fff;
    ul{
        width: 100%;
        height: 100%;
        display: flex;
        li{
            width: 25%;
            height: 100%;
            display: flex;
            height: 100%;
            justify-content: center;
            align-items: center;
            a{
                display: flex;
                width: 100%;
                height: 100%;
                width: .45rem;
                height: .45rem;
                flex-direction:column;
                justify-content: center;
                align-items: center;
                color: #999;
                b{
                    font-size: .13rem;
                    display: flex;
                }
                i{
                    font-size: .27rem;
                }
            }
            .active{
                color: #41C856;
            }
            
        }
        
        
    }
`