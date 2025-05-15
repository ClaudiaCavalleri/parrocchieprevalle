import type { DOMAttributes, FC } from 'react';

import Content, { ContentProps } from '../../molecules/Content/Content';
import Image, { ImageProps } from '../../atoms/Image/Image';
import { TitleProps } from 'src/components/atoms/Title/Title';
import { TextProps } from 'src/components/atoms/Text/Text';

export interface MediaContentProps extends DOMAttributes<HTMLOrSVGElement> {
    alt?: string;
    componentClassName?: string;
    imageUrl?: string;
    mediaPosition?: 'left' | 'right';
    mediaProps?: ImageProps;
    content?: ContentProps;
}

const MediaContent: FC<MediaContentProps> = ({
    alt = '',
    children,
    componentClassName = '',
    imageUrl = '',
    mediaPosition = 'right',
    mediaProps,
    content,
}) => {

    return (
        <div className='content-media-grid'>
            <div
                className={[
                    'content',
                    mediaPosition === 'left' ? 'place-second' : 'place-first',
                ].join(' ')}
            >
                <Content
                    {...content}
                />
            </div>

            
            <Image
                alt={alt}
                pictureClassName={[
                    'media',
                    // 'relative rounded-3xl overflow-hidden h-full min-h-72 md:min-h-80',
                    // 'lg:min-h-96 [&_img]:absolute [&_img]:h-full [&_img]:object-cover',
                    mediaPosition === 'left' ? 'place-first' : 'place-second'
                ].join(' ')}
                src={imageUrl}
                {...mediaProps}
            />
        </div>
    )
}

export default MediaContent;