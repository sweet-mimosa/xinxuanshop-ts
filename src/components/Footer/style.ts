import styled from "styled-components";
import { px2rem } from "@/utils";

export const FooterWrapper = styled.div`
    width: 100%;
    height: ${px2rem(50)};
    position: fixed;
    background: white;
    bottom: 0;
    left: 0;
    display: flex;
    border-top: 1px whitesmoke solid;
    a{
        display: flex;
        flex-direction: column;
        flex: 1;
        align-items: center;
        justify-content: center;
        color: grey;
        cursor: pointer;
        &.active{
            color: orange;
        }
        i{
            font-size: ${px2rem(24)};
        }
        span{
            font-size: ${px2rem(14)};
        }
    }
`