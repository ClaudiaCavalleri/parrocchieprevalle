import React, { DOMAttributes, useState } from 'react';

export interface ImageProps extends DOMAttributes<HTMLOrSVGElement> {
    src: string;
    alt: string;
    width?: number | string;
    height?: number | string;
    fallbackSrc?: string;
    className?: string;
    pictureClassName?: string;
};

const Image: React.FC<ImageProps> = ({
    src,
    alt,
    width = 'auto',
    height = 'auto',
    fallbackSrc = '/fallback.jpg', // immagine di default
    className = '',
    pictureClassName = '',
}) => {
    const [imgSrc, setImgSrc] = useState(src);

    const handleError = () => {
        setImgSrc(fallbackSrc);
    };

    return (
        <picture
            className={pictureClassName}
        >
            <img
                src={imgSrc}
                alt={alt}
                // width={width}
                // height={height}
                onError={handleError}
                className={className}
                loading="lazy"
            />
        </picture>
    );
};

export default Image;
