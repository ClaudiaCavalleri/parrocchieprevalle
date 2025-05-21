"use client";

import { useState, type FC } from 'react';
import type { ImageProps } from '../../atoms/Image/Image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
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

    const [lightboxImage, setLightboxImage] = useState<ImageProps | null>(null);

    const openLightbox = (image: ImageProps) => {
        setLightboxImage(image);
    };

    const closeLightbox = () => {
        setLightboxImage(null);
    };

    return (<>
        <Swiper
            breakpoints={{
                768: {
                    slidesPerView: 2
                },
                1024: {
                    slidesPerView: 3
                },
            }}
            className='swiper'
            allowSlideNext={true}
            allowSlidePrev={true}
            modules={[Navigation]}
            navigation
            spaceBetween={24}
            slidesPerView={1}
            centerInsufficientSlides
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {
                mediaList.map((item: ImageProps, index: number) => {
                    return (
                        <SwiperSlide
                            key={`slider-item-${index}`}
                            className="swiper-slide"
                            onClick={() => openLightbox(item)}
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

        {lightboxImage && (
            <div
                className="lightbox-overlay"
                onClick={closeLightbox}
            >
                <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                    <img
                        src={lightboxImage.src}
                        alt={lightboxImage.alt}
                        className="lightbox-image"
                        onClick={(e) => e.stopPropagation()} // Previene la chiusura se si clicca sull'immagine
                    />
                    <button
                        className="lightbox-close"
                        onClick={closeLightbox}
                        aria-label="Chiudi lightbox"
                    >
                        &times;
                    </button>
                </div>
            </div>
        )}
    </>);
};

export default SliderGallery;