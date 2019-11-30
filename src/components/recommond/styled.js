import styled from "styled-components"

export const Content = styled.div`
overflow: auto;
.left-box{
    position: fixed;
    top: .4rem;
    left: 0;
    height: 100%;
    padding-bottom: .5rem;
    border-right: 5px solid #f3f4f5;
    background: skyblue;
    width: .75rem;
    display: flex;
    flex-direction: column;
    background:#fff;
    ul{
        overflow: auto;
    }
    li{
        width: 100%;
        height: .5rem;
        display: flex;
        a{
            display: flex;
            width:100%;
            height: 100%;
            padding: .15rem 0;
            font-size: .13rem;
            color: #333;
            justify-content: center;
        }
        .active{
            color: #41c856;
            background: #f3f4f5;
        }
    }
}
.right-box{
    border-top: 5px solid #f3f4f5;
    display: flex;
    flex-direction: column;
    overflow: auto;
    width: 3rem;
    display: flex;
    margin-left: .75rem;
    padding: 5px 5px .2rem;
    margin-top: .4rem;
    .title{
        height: .19rem;
        margin-top: .1rem;
        padding-left: .05rem;
        color: #999;
        font-size: .12rem;
        display: flex;
        align-items: center;
        width: 100%;
    }
    ul{
        width: 100%;
        min-height: 3rem;
        display: flex;
        flex-wrap: wrap;
        li{
            width: 33%;
            height: 1.17rem;
            padding: 0 5px;
            margin-top: .1rem;
            flex-direction: column;
            display: flex;
            align-items: center;
            justify-content: center;
            img{
                display: flex;
                width: .87rem;
                height: .87rem;
            }
            p{
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: .13rem;
                color: #333;
                margin-top: .1rem;
            }
        }
    }
}
`
