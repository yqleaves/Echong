import styled from 'styled-components'

export const Content = styled.div`
    overflow:auto;
    margin-top: .5rem;
    padding-bottom: .52rem;
    position: relative;
    video{
        height: 1.8rem;
        width: 100%;
        dsiplay: flex;
    }
    .info{
        height: .996rem;
        padding: .18rem 0;
        display: flex;
        flex-direction: column;
        width: 100%;
        overflow: hidden;
        margin-top: -.2rem;
        border-bottom: 1px solid #f5f5f5;
        h2{
            height: .256rem;
            margin: 0 .15rem;
            color: #333;
            font-weight: bold;
            font-size: .16rem;
        }
        p{
            height: .38rem;
            padding: 0 .1rem;
            padding-top: 8px;
            margin: 0 .15rem;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            font-size: .12rem;

            color: #999;
            img{
                width: .3rem;
                height: .3rem;
                display: flex;
                
            }
        }
    }
    .video-list{
        height: 1.8rem;
        padding: .18rem 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        .title{
            height: .277rem;
            margin: 0 .15rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-shrink: 0;
            h3{
                width: 2.02rem;
                height: 100%;
                font-weight: bold;
                dsisplay: flex;
                justify-content: space-between;
                flex-shrink: 0;
                span{
                    padding: 0 7px;
                    height: .18rem;
                    width: .69rem;
                    text-align: center;
                    font-weight: normal;
                    color: #666;
                    background: #e7e7e7;
                    border-radius: .2rem;
                    font-size: .11rem;
                }
            }
            p{
                width: .57rem;
                height: 100%;
                color: #999;
                font-size: .12rem;
                display: flex;
                align-items: center;
            }
        }
        .video-box{
            height: 1.14rem;
            padding: .18rem 0 0 .1rem;
            width: 100%;
            display: flex;
            overflow: hidden;
            .scroll{
                width: 6.43rem;
                height: 100%;
                display: flex;
                flex-direction: row;
                flex-shrink: 0;
                overflow-x: scroll;
            }
            .li{
                height: 100%;
                width: .97rem;
                margin-right: .1rem;
                display: flex;
                flex-direction: column;
                position: relative;
                img{
                    width: .97rem;
                    height: .59rem;
                    border-radius: .1rem;
                }
                .time{
                    display: flex;
                    padding: 0px 7.5px;
                    background: rgba(0,0,0,1);
                    opacity: 0.4;
                    border-radius: .14rem;
                    position: absolute;
                    bottom: .4rem;
                    right: 5px;
                    font-size: .09rem;
                    color: #fff;
                    width: .49rem;
                    height: .15rem;
                    align-items: center;
                    img{
                        width: 6px;
                        height: 7px;
                        margin-right: 5px;
                        display: flex;
                    }
                }
                p{
                    height: .32rem;
                    color: #666;
                    margin-top: 5px;
                    width: 100%;
                    font-size: .1rem;
                }
            }
        }
    }
    .footer{
        height: .5rem;
        width: 100%;
        display: flex;
        justify-content: center;
        border-top: 1px solid #f5f5f5;
        left: 0;
        position: fixed;
        bottom: 0;
        .box{
            width: 60%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            p{
                width: .47rem;
                height:100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                img{
                    width: .18rem;
                    height: .17rem;
                }
                span{
                    color: #333;
                    font-size: .12rem;
                    display: flex;
                    width: 100%;
                    height: .19rem;
                    justify-content: center;
                }
            }
        }
    }
`