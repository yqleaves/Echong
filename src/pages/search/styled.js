import styled from "styled-components"

export const SearchBox = styled.div`
   overflow: auto;
   background: #f1f1f1;
   .head{
       height: .49rem;
       display: flex;
       padding: 7px 12px;
       justify-content: space-between;
       align-items: center;
       background: #fff;
       i{
            width: .16rem;
            height: .16rem;
            margin-top: 8px;
            border-top: 1px solid #999;
            border-left: 1px solid #999;
            transform: rotate(-45deg);
            -webkit-transform: rotate(-45deg);
       }
       input{
           width: 2.94rem;
           height: .35rem;
           padding: 0 .1rem;
           background: #f6f6f6;
           border-radius: 5px;
           font-size: .14rem;
           color: #999;
           line-height: .35rem;
           position: relative;
       }
       img{
            position:absolute;
            right: .6rem;
            width: .16rem;
            height: .16rem;
       }
       a{
           width: .32rem;
           height: .35rem;
           color: #333;
           font-size: .16rem;
           line-height: .35rem;
       }
   }
   .rare{
       height: .3rem;
       padding-left: .12rem;
       background: #fdfdfd;
       font-size: .14rem;
       display: flex;
       align-items: center;
       color: #666;
       img{
           width: .2rem;
           height: .2rem;
           margin-right: 8px;
       }
   }
   .label{
       height: 1.29rem;
       padding: 0 .12rem .23rem;
       display: flex;
       flex-wrap: wrap;
       align-content: flex-start;
       a{
            padding: 3px .1rem;
            margin: .1rem .1rem 0 0;
            color: #999;
            font-size: .12rem;
            border-radius: .15rem;
            background: #fff;
            height: .25rem;
       }
   }
`
