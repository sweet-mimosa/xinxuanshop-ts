import styled from "styled-components";

export const ShopcartWrapper = styled.div`
    margin-bottom: 5rem;
    .header{
        width: 100%;
        height: 2rem;
        text-align: center;
        line-height: 2rem;
        background-color: #fff;
        border-bottom: whitesmoke 1px solid;
        margin-bottom: 0.5rem;
        position: sticky;
        top: 0;
        left: 0;
    }
    .container{
        padding: 1rem 0.9rem;
        display: flex;
        border-radius: 1rem;
        border: whitesmoke 1px solid;
        overflow: hidden;
        .images{
            width: 5rem;
            height: 5rem;
            &::before{
                content: '';
                display: block;
            }
            img {
                width: 5rem;
                height: 100%;
                border-radius: 0.5rem;
                overflow: hidden;
            }
        }
        .body-right {
            margin-left: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            p{
                overflow: hidden; 
                text-overflow: ellipsis;
                display: -webkit-box; 
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                font-size: 0.8rem;
                margin-left: 0.5rem;
            }
        }
        .count {
            display: flex;
            justify-content: space-between;
            p{
                margin: 0.2rem;
                color: orange;
            }
        }
    }
    .pricecount{
        position: fixed;
        bottom: 2.5rem;
        left: 0;
        width: 100%;
        height: 2rem;
        display: flex;
        justify-content: space-between;
        border-radius: 0.5rem;
        overflow: hidden;
        border: whitesmoke 1px solid;
        z-index: 100;
        background-color: #fff;
        span{
            font-size: 0.8rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-left: -7.8rem;
        }
        .price{
            font-size: 0.8rem;
            padding: 0.1rem;
            width: 45%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: orange;
            border-radius: 0.5rem;
        }
    }
`