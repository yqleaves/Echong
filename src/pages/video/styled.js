import styled from "styled-components"

export const Content = styled.div`
    overflow: auto;
    padding-bottom: .52rem;
    .video{
        display: flex;
        margin-top: .25rem;
        overflow: hidden;
        align-items: center;
        flex-direction: column;
        .video-box{
            width: 92%;
            margin: 0 .1rem;
            height: 100%;
            display: flex;
            flex-direction: column;
            box-shadow: 0px 10px 25px 0px rgba(23,23,23,0.1);
            border-radius: 5px;
            overflow: hidden;
            margin-bottom: .25rem;
            position: relative;
            a{
                display: flex;
                width: 100%;
                height: 100%;
                position: relaive;
                color: #333;
            }
            img{
                width: 3.45rem;
                height: 1.943rem;
                border-radius: 3px;
                
            }
            .mask{
                width: 3.45rem;
                height: 1.943rem;
                border-radius: 3px;
                background: rgba(0,0,0,.4);
                position: absolute;
                p{
                    color: #fff;
                    font-size: .15rem;
                    width: 1.2rem;
                    height: .24rem;
                    position: absolute;
                    bottom: .1rem;
                    left: .15rem;
                }
                span{
                    border-radius: 0px .6rem .6rem .66rem;
                    padding: 0 7.5px;
                    font-weight: 400;
                    background: #f3f4f5;
                    position: absolute;
                    right: .1rem;
                    bottom: .12rem;
                    font-size: 9px;
                }
            }
            .scroll-box{
                width: 100%;
                height: 1.22rem;
                overflow: hidden;
                padding: .15rem 0 .15rem 8px;
                display: flex;
                .scroll{
                    min-width: 8rem;
                    overflow-x: auto;
                    height: 100%;
                    overflow-x: scroll;
                    display: flex;
                    flex-wrap: nowrap;
                    flex-shrink: 0;
                }
                .video-list{
                    width: 1.11rem;
                    height: 100%;
                    margin-right: .1rem;
                    display: flex;
                    a{
                        display: flex;
                        width: 100%;
                        height: 100%;
                        position: relative;
                        flex-direction: column;
                        img{
                            width: 1.1rem;
                            height: .628rem;
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
                                dislpay: flex;
                            }
                        }
                        p{
                            width: 100%;
                            height: .24rem;
                            margin-top: 6px;
                            font-size: .1rem;
                            display: flex;
                            color: #333;
                        }
                    }
                }
            }
        }
    }
`