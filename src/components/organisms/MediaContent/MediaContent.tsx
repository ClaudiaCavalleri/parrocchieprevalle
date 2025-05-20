import type { DOMAttributes, FC } from 'react';
import type { MapProps } from '../../atoms/Map/Map';
import type { TextRowProps } from 'src/components/molecules/TextRow/TextRow';
import type { ContentProps } from '../../molecules/Content/Content';
import type { ImageProps } from '../../atoms/Image/Image';

import Content from '../../molecules/Content/Content';
import Image from '../../atoms/Image/Image';
import Map from '../../atoms/Map/Map';
import TextList from '../../cells/TextList/TextList';
import useFacebookSDK from '../../../hooks/useFacebookSDK';
import FacebookWidget from '../../atoms/FacebookWidget/FacebookWidget';

export interface MediaContentProps extends DOMAttributes<HTMLOrSVGElement> {
    alt?: string;
    componentClassName?: string;
    content?: ContentProps;
    mapProps?: MapProps;
    mediaPosition?: 'left' | 'right';
    mediaProps?: ImageProps;
    contentList?: TextRowProps[];
    type: 'image' | 'map' | 'social' | 'text-only';
}

const MediaContent: FC<MediaContentProps> = ({
    content,
    mapProps,
    mediaPosition = 'right',
    mediaProps,
    contentList = [],
    type = 'text-only',
}) => {
    const hasContentList: boolean = Array.isArray(contentList) && contentList.length > 0;
    const hasImage = !!mediaProps?.src
    const hasMap = !!mapProps?.src;
    const hasSocial: boolean = type === 'social';

    useFacebookSDK(type === 'social');

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
                {hasContentList && 
                    <TextList
                        list={contentList}
                    />
                }
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

            {hasSocial &&
                <FacebookWidget
                    className={mediaPosition === 'left' ? 'place-first' : 'place-second'}
                    href="https://www.facebook.com/parrocchieprevalle"
                    width={300}
                    height={500}
                    // position={mediaPosition}
                />
            }

        </div>
    )
}

export default MediaContent;