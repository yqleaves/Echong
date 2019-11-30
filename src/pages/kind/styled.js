import styled from "styled-components"

export const Content = styled.div`
    overflow: auto;
    .head-box{
        width:100%;
        height: .4rem;
        display: flex;
        align-items: center;
        position: relative;
        justify-content: center;
        position: fixed;
        background: #fff;
        z-index: 999;
        top: 0;
        left: 0;
        border-bottom: 1px solid #cbcbcb;
        a{
            display: flex;
            font-size: .14rem;
            font-weight: bold;
            width: .64rem;
            height: 100%;
            color: #333;
           
            padding: 0 .1rem;
            span{
                width: 100%;
                height: 100%;
                align-items: center;
                justify-content: center;
                display: flex;
                border-bottom: 2px solid #fff;
            }
        } 
        .active span{
            color: #41c856;
            border-bottom: 2px solid #41c856;
        }
        img{
            width: .14rem;
            height: .14rem;
            position:absolute;
            right: .15rem;
            top: .13rem;
        }
    }

 
   
`