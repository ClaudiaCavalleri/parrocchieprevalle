"use client";

import type { FC } from 'react';
import type { ImageProps } from '../../atoms/Image/Image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from "swiper/modules";
import Image from '../../atoms/Image/Image';

import 'swiper/css';
import 'swiper/css/navigation';

export interface SliderGalleryProps {
    mediaList?: ImageProps[];
    media?: ImageProps;
}

const SliderGallery: FC<SliderGalleryProps> = ({
    mediaList = [],
}) => {
    return (
        <Swiper
            className='swiper'
            allowSlideNext={true}
            allowSlidePrev={true}
            modules={[Navigation]}
            navigation
            spaceBetween={16}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {
                mediaList.map((item: ImageProps, index: number) => {
                    return (
                        <SwiperSlide
                            key={`slider-item-${index}`}
                            className="swiper-slide"
                        >
                            <Image
                                pictureClassName=''
                                className="slider-image"
                                key={`slider-item-image-${index}`}
                                alt={item.alt}
                                src={item.src}
                            />
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
};

export default SliderGallery;