import React, { memo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Grid, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/free-mode";
import { Wrapper } from './style'
import { tabsType } from '@/models';

interface SwipersProps {
    source: tabsType[]
}

const Swipers:React.FC<SwipersProps> = (props) => {
    const { source } = props;
    return (
        <Wrapper>
            {source.length > 5 && 
            <Swiper
                slidesPerView={5}
                grid={{
                    rows: 2
                }}
                spaceBetween={8}
                freeMode={true}
                modules={[Grid, FreeMode]}
                className="mySwiper"
            >
                {
                    source.map(item => {
                        return (
                        <SwiperSlide onClick={() => {console.log('click');}} key={item.id}>
                            <img src={item.image} />
                            <p>{item.title}</p>
                        </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            }
        </Wrapper>
    )
}

export default memo(Swipers)
