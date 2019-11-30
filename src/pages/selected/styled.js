import styled from "styled-components"

export const Content = styled.div`
    
    .head-box{
        width:100%;
        height: 1.04rem;
        background: transparent;
        overflow: hidden;
        z-index: 999;
        position: fixed;
        top: 0;
        left: 0;
    }
    .search{
        height: .3rem;
        width: 100%;
        margin-top: .25rem;
        padding: 0 .15rem;
        justify-content: space-between;
        display: flex;
        align-items: center;
        .input{
            width: 3.05rem;
            color:#333;
            height: .28rem;
            border-radius: .16rem;
            position: relative;
            background: #ccc;
            display: flex;
            
            align-items: center;
            img{
                width: .1rem;
                height: .1rem;
                margin-left: .1rem;
                margin-right: .1rem;
            }
            span{
                font-size: .12rem;
            }
            
        }
        p{
            width: .25rem;
            height: .25rem;
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAn1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8Kd3m4AAAANHRSTlMAH7sEwArv/fr0kTMV497ZpCT35y0SD+vEb2kbyKxEP51/e0y0lWRaKI2MdD3PUzi9sK6JQiNRfQAAAe5JREFUSMfFlemWojAQhS9LwiI7goiAtu3WanfPct//2WbGUUZwIb+mvz/k3HNzUkWqKvgC4nL9LZAWpW8uyvGQe/QWsIPvjp7Ym4LkJJo2cQbkWlNGPsni9YF9bJJyPeofOSHNe6cYS5uTg8ANYjqh/WL0Zc+k5ea4i9hbLLyutgvoz/GQo88g7vzKlNUMT/AKplc7ZiF1gacInaHX5luxEhhAVNQv6yWDDIPMUk5xQkusORR4ZaKdFhEjFX9r1GxbG7K2ocQAXEZQZME3AClHUGTEiYFPBlAm5BxLrq+i1B1dAx4KLl9Qc4sWnaQJPBS2/IH36xQckjbwUBgzhGSmfkJGCRLqORi0YNOAMgZtpPSUvG1IIQdnTzfpFT9u9OnuFH+JPlvWeKHbl0s6Sy87SJ53dC9uzrAv5zVPfM/vlYZxr/ialZSr5n7xwaWrXt57ADvLyRUbyLbiv9d/UG3Rxen7QRNqQ8DRztfntKLSmEGiUk7infplqXKCMBl6bWzVoN+r6LdlXnM55J9fj/uxZc+e23PXovmvCVZ0n9v7T1bCdrPYFEXvh326kjQ7LePz51ETEONNnZDBnw2zOIeRxc00SkmavWd3Y/GCZW7Fb8VL2OLvb2v5uCj8hDKMynPyRh1I2jLQ15sd/j+/AMOpN25qtOyTAAAAAElFTkSuQmCC) no-repeat;
            background-size: 100% 100%;
        }
    }
    .nav{
        width: 100%;
        height: .44rem;
        display: flex;
        overflow: hidden;
        padding-top: .05rem;
        ul{
            width: 5.25rem;
            overflow-x: scroll;
            flex-direction: row;
            display: flex;
            align-items: flex-start;
        }
        li{
            width: 25%;
            height: 100%;
            display: flex;
            justify-content: center;
            font-size: .14rem;
            color: #fff;
            align-items: center;
            margin: 0;
            font-family: Microsoft Yahei,-apple-system-font,Helvetica Neue,sans-serif;
            a{
                color: #fff;
            }
        }
        li:nth-of-type(5) a{
            background: url(https://img2.epetbar.com/2019-10/12/11/297925c78a7887a43c14420332d70f5b.png) no-repeat;
            background-size: cover;
            width: 100%;
            height: .2rem;
        }
    }
   
    .swiper-container {
        width: 100%;
        height: 2.9rem;
        display: flex;
        margin-bottom:1px;
        position: relative;
        overflow: hidden;
        .swiper-wrapper{
            display:flex;
        }
        .swiper-slide {
            text-align: center;
            font-size: 18px;
            background: #fff;
            display: flex;
            justify-content: center;
            img {
                width: 100%;
                height: 100%;
                border-radius: 0 0 .2rem .2rem;
            }
        }
    }
    .menu{
        width: 100%;
        height: 1.15rem;
        margin-top: -10%;
        z-index: 5;
        position:relative;
        display: flex;
        flex-direction: row;
        justify-content:space-between;
        align-items: center;
        li{
            width: 25%;
            height: 100%;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    
    .touch{
        height: .466rem;
        margin-top: .2rem;
        margin-bottom: .1rem;
        padding: 0 .2rem .05rem;
        ul{
            width: 100%;
            height: .224rem;
            display:flex;
            justify-content:space-between;
            align-items: center;
            li{
                width: 25%;
                height: 100%;
                font-size: .14rem;
                text-align: center;
            }
            .active{
                color: #ff5757;
            }
        }
        span{
            width:100;
            display: flex;
            height: .21rem;
            font-size: .13rem;
            color: #333;
            justify-content: center;
        }
    }
    .top{
        position: fixed;
        bottom: .6rem;
        right: .10rem;
        width: .28rem;
        height: .28rem;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJBRkJFMTZEOTY4QzExRTY4NEFCRTRDMjIwRkJGNkZEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJBRkJFMTZFOTY4QzExRTY4NEFCRTRDMjIwRkJGNkZEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkFGQkUxNkI5NjhDMTFFNjg0QUJFNEMyMjBGQkY2RkQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkFGQkUxNkM5NjhDMTFFNjg0QUJFNEMyMjBGQkY2RkQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5h5W0fAAAFoElEQVRo3uWbXUtbSRjHAy2s29L2I/SF7ZVfoOxFd7v1pVaWtmtbNbvVJttoWu02MfgSoVqjYsAg4o0KIr6A3njhlYLeea1oUBCDb+iVeuFHcJ+/OxPG2UkaT2ZOkrbwh9OTmed5fp5z5uWZGcfp6anDhGpqavJIP5Eekl6S3pEaSK2kL0yt7J6HlXnI6uSl6ufs7OxS0g15k/Qz6W9SmwB2WbUxG7B1K+uAKajbJGeakMngYftOxoERBMmlCrS2tra9sbEx0Nvb65mYmKhcXFx8Fo1GnxweHj6mur9CuMY9/IYyKIs6qJsA3iWD2wJMTm+Q/lBAfgkGg77x8XFnLBYr5GCXFerCBmzBpgIcvm/YAkyO8kktYgBer7etp6endnl5ucQqZCLBJmzDhwSNGPKNAZPxK6Sn8l87FAp9WF9ff6IbVBb5KIYvxdNGTFe1ApPBH0hVoiOfz9cyNzf3wjSoLPiEb8W3/aMWYDJ0vea/f3EH9K9+b2+vwG5YLvimGOokaC9iTQuYDR5qxUZpaGioKlOgshCL1Kgh1jxLwOybrRa7mampqfJsgeVCTFI3hpivWAEuFZ8suolsg+VCbNKTLr0UMOt64gYGBwershWWCzFK33R+SsBsPNwiNFB12Q7L1dHRUSf10zdTAS4Xu579/f2CXAFGrFKXVZ4UmArcFV+LTPSzOvpp6dW+lwzYzQt2dnZ+yDVYLsQuALuVwGyKFx8bYyiXq8CIXRp731YBO3kBTNOsOOrv7//T6XQ2V1RUtOoQbMGmlVjAIAA7LwCz4WMb73OtznoowBZdsCK0lVhWVlZKhL65jQ87OfAD/tegOajf6qtEk3evbmDYtBoP5tPCU34gAscbKxq1VFp1cHJy8mh+fv732dnZ5zoEW7BpNR5kUeTGi08Q4q9zLBYrytXGSpE5KZJe6zwA3+d/hUAg0Gg6iOnp6TLyhVfNh2vT/sAkPOX7DpYLPr8RiUQ8Jp2PjY29qqysDPLvE9ejo6OvTfqUWutfHCwBfn4D77wpxyMjI69FWBEav5nyOzk5KX7HLx0s639+A+lSQxP1iq+1xihjwjeYBGCPgy11nN9YW1vTnowbGBhwptoFoaxu/2ASgBsc4lrPwcHBY53O+vr6/hKBXC5XwO/3v+f/xzXuiWVQR2cM29vbhQJw0CHOLDQ3Fm9EELfb3RCNRotpzurm93CNe/hNLIu6uuI4Ojr6TWQ0AhwOh6tFAI/H49/Y2Chik/QLwLiH31BGrAMbBoA/X3ilxXUfq+rq6norBo7+dnNzs1DISvwPGEIZlBXrdnd3V2t+pZu1NlryN0ujnE9bW1sFUhpGCQyhLOro/KalRsuntVuqr6//yAOl+eg/MuzXgDk06vIysKm7W4oPPKiTTqsvnJmZeYEGCDOcnZ2dggSJtqTAEOrCBmzBZpoDjwp54GHb0DJVYNNDS1snD3YDqyYPtk4P7QRWTg/lBIDJCYTdwMoEgCLF4/tWgJOleC4k8ZAAy3XgpEk8XWnabAJOmqZVJeJpfFucq8ApJeLtWmqxAzilpRYGfM/0YlooFHJxYFxndDHNjuXSpaWlpxgyQrjO6HKpakEci8zf9IL4d7flIdGmFtMjsHRHVGltahG2Lb3NwW1LLkvblhj0NdJ78UkPDw9nzetNsbyRnixivaZj66FX/D7QOGR666HUQHHY6zo3l1bLm0sXFhae2w0Ln0Y3lwrQV+Xtw3idsJfZ1DBUFHzAl2LDeKn27cOZ3iAeDodVG8SDRjeIK44AlCU6AoBuAvngdHLJsJHkCECZbUcAFIc83IkOeTQ1NQUikcg71SGP4+PjR7u7uwWrq6sl+A3LmihLdRqSHPKAr7vZcIznDptPtxs4xtOeNcd4FOC3vouDWikcxXvFVjg+YX0Hi1pMzeyeh5UxfhTvXzgRaWwg1BaUAAAAAElFTkSuQmCC) no-repeat;
        background-size: 100% auto;
        z-index: 999;
    }
    
`