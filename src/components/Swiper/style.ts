import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    border-radius: 1rem;
    border: 1px whitesmoke solid;
    background-color: whitesmoke;
    overflow: hidden;
    .swiper {
        width: 100%;
        height: 6rem;
        margin-left: auto;
        margin-right: auto;
        display: flex;
    }

    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
        height: calc((100% - 10px) / 2) !important;
        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
        flex-direction: column;
        cursor: pointer;
        img{
            width: 90%;
            height: 80%;
        }
        p{
            font-size: 0.65rem;
        }
    }
`