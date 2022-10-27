import styled from "styled-components";

export const SearchBoxWrapper = styled.div`
    position: relative;
    margin: 0.25rem auto;
    flex: 1;
    .box {
        width:90%;
        height: 1.25rem;
        border-radius: 1rem;
        padding-left:1.5rem;
        border: orange 1px solid;
        outline: none;
        font-size: 0.75rem;
    }
    .icon-sousuo{
        position: absolute;
        top: 0.3rem;
        left: 0.5rem;
        font-size: 0.8rem;
    }
`