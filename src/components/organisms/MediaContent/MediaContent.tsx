import type { DOMAttributes, FC } from 'react';
import type { MapProps } from '../../atoms/Map/Map';

import Content, { ContentProps } from '../../molecules/Content/Content';
import Image, { ImageProps } from '../../atoms/Image/Image';
import Map from '../../atoms/Map/Map';

export interface MediaContentProps extends DOMAttributes<HTMLOrSVGElement> {
    alt?: string;
    componentClassName?: string;
    content?: ContentProps;
    mapProps?: MapProps;
    mediaPosition?: 'left' | 'right';
    mediaProps?: ImageProps;
}

const MediaContent: FC<MediaContentProps> = ({
    content,
    mapProps,
    mediaPosition = 'right',
    mediaProps,
}) => {
    const hasImage = !!mediaProps?.src
    const hasMap = !!mapProps?.src;

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

            {hasImage &&
                <Image
                    pictureClassName={[
                        'media',
                        mediaPosition === 'left' ? 'place-first' : 'place-second'
                    ].join(' ')}
                    {...mediaProps}
                />
            }

            {hasMap && 
                <Map
                    src={mapProps.src}
                    width={mapProps.width}
                    height={mapProps.height}
                    className={mapProps.className}
                    wrapperClassName={mediaPosition === 'left' ? 'place-first' : 'place-second'}
                />
            }
        </div>
    )
}

export default MediaContent;