import styled from "styled-components"

export const Content = styled.div`
    overflow: auto;
    .box{
        width: 92%;
        margin: .2rem auto;
        background: rgba(255,255,255,1);
        box-shadow: 0px 10px 25px 0px rgba(23,23,23,0.1);
        border-radius: .1rem;
        height: 1.278rem;
        padding: .15rem;
        .top{
            height: .684rem;
            display: flex;
            justify-content: space-between;
            img{
                width: 1.25rem;
                height: .62rem;
                border-radius: 5px;
            }
            .item{
                width: 1.9rem;
                height: 100%;
                margin-left: .1rem;
                h3{
                    height: .336rem;
                    width: 100%;
                    color: #333;
                    font-size: .14rem;
                }
                p{
                    margin-top: 8px;
                    color: #999;
                    font-size: .12rem;
                    height: .19rem;
                    width: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
        }
        .bottom{
            height: .264rem;
            width: 100%;
            display: flex;
            justify-content: space-between;
            margin-top: 4px;
            align-items: center;
            .name{
                width: .584rem;
                height: 100%;
                display: flex;
                align-items: center;
                img{
                    width: .23rem;
                    margin-right: 5px;
                    height: .23rem;
                }
                span{
                    font-size: .12rem;
                    color: #333;
                    display: flex;
                }
            }
            p{
                width: .53rem;
                height: 100%;
                display: flex;
                align-items: center;
                img{
                    width: .16rem;
                    height: .15rem;
                    margin-right: 5px;
                }
                span{
                    font-size: .12rem;
                    color: #999;
                }
            }
        }
    }
`