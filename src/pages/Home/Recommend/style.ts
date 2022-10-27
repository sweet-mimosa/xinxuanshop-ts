import { px2rem } from '@/utils';
import styled from "styled-components";

export const RecommendWrapper = styled.div`
    background: whitesmoke;
    margin-bottom: 2rem;
    /* display: flex; */
`

export const Card = styled.div<{model:boolean}>`
    background-color: white;
    display: inline-block;
    width: 45%;
    height: 15rem;
    flex: 1;
    border-radius: 0.5rem;
    overflow: hidden;
    margin: 0.2rem 0.45rem;
    position: relative;
    img{
        width: 100%;
        height: 70%;
        border-radius: 0.5rem;
        overflow: hidden;
    }
    .title{
        overflow:hidden; 
        text-overflow: ellipsis;
        display:-webkit-box; 
        -webkit-box-orient:vertical;
        -webkit-line-clamp:2;
        font-size: 0.8rem;
        margin-left: 0.2rem;
    }
    .desc{
        display: flex;
        .price{
            color: orange;
            font-size: 0.8rem;
            margin-left: 0.2rem;
        }
        .buys{
            color: grey;
            font-size: 0.4rem;
            margin-top: 0.3rem;
            margin-left: 0.2rem;
        }
    }
    .icon{
        position: absolute;
        left: 0;
        bottom: 0;
        display: flex;
        width: 100%;
        justify-content: space-around;
        font-size: 0.5rem;
        .iconbox{
            width: 45%;
            display: flex;
            flex-direction: column;
            cursor: pointer;
        }
        .icon-xihuan {
            color: ${props => props.model ? `orange` : `black` };
        }
        i,span{
            margin: 0 auto;
        }
    }
`