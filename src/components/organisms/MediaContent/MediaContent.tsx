import type { DOMAttributes, FC } from 'react';

import Content, { ContentProps } from '../../molecules/Content/Content';
import Image, { ImageProps } from '../../atoms/Image/Image';

export interface MediaContentProps extends DOMAttributes<HTMLOrSVGElement> {
    alt?: string;
    componentClassName?: string;
    mediaPosition?: 'left' | 'right';
    mediaProps?: ImageProps;
    content?: ContentProps;
}

const MediaContent: FC<MediaContentProps> = ({
    mediaPosition = 'right',
    mediaProps,
    content,
}) => {
    const hasImage = !!mediaProps?.src

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
        </div>
    )
}

export default MediaContent;