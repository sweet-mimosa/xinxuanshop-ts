import styled from "styled-components";
import { px2rem } from "@/utils";

export const HomeWrapper = styled.div`
    padding-top: ${px2rem(34)};
    .searchbox{
        position: sticky;
        top: ${px2rem(40)};
        z-index: 100;
        background-color: white;
    }
`

export const NavWrapper = styled.div`
    z-index: 100;
    width: 100%;
    height: ${px2rem(40)};
    position: fixed;
    background: white;
    top: 0;
    left: 0;
    display: flex;
    border-bottom: 1px whitesmoke solid;
    a{
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
        color: grey;
        cursor: pointer;
        &.active{
            color: orange;
        }
        i{
            font-size: ${px2rem(20)};
        }
        span{
            font-size: ${px2rem(14)};
        }
        img{
            height: 70%;
            width: 70%;
        }
    }
`