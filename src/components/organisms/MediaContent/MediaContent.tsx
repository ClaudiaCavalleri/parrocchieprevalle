import type { DOMAttributes, FC } from 'react';

import Content from '../../molecules/Content/Content';
import Image, { ImageProps } from '../../atoms/Image/Image';
import { TitleProps } from 'src/components/atoms/Title/Title';
import { TextProps } from 'src/components/atoms/Text/Text';

interface MediaContentProps extends DOMAttributes<HTMLOrSVGElement> {
    alt?: string;
    componentClassName?: string;
    imageUrl?: string;
    mediaPosition?: 'left' | 'right';
    mediaProps?: ImageProps;
    subtitle?: string;
    subtitleProps?: TitleProps;
    text?: string;
    textProps?: TextProps;
    title?: string;
    titleProps?: TitleProps;
}

const MediaContent: FC<MediaContentProps> = ({
    alt = '',
    children,
    componentClassName = '',
    imageUrl = '',
    mediaPosition = 'right',
    mediaProps,
    subtitle,
    subtitleProps,
    text,
    textProps,
    title,
    titleProps,
}) => {
    const hasTitle: boolean = typeof title === 'string' && title !== '';
    const hasText: boolean = typeof text === 'string' && text !== '';
    const hasSubtitle: boolean = typeof subtitle === 'string' && subtitle !== '';
    // const hasCTA: boolean = Array.isArray(cta) && cta.length > 0;
    // const hasMedia: boolean = (
    //     (typeof media === 'object' && typeof media.url !== 'undefined')
    //     //(typeof urlMedia === 'string' && urlMedia !== '')
    // );

    return (
        <div className={componentClassName}>
            <div
                className={[
                    'relative',
                    mediaPosition === 'left' ? 'place-first' : 'place-second',
                    'col-span-2'
                ].join(' ')}
            >
                <Content
                    columns={1}
                    title={title}
                    titleProps={titleProps}
                    subtitle={subtitle}
                    subtitleProps={subtitleProps}
                />
            </div>

            
            <Image
                alt={alt}
                pictureClassName={[
                    'relative rounded-3xl overflow-hidden h-full min-h-72 md:min-h-80',
                    'lg:min-h-96 [&_img]:absolute [&_img]:h-full [&_img]:object-cover',
                    mediaPosition === 'left' ? 'place-second' : 'place-first'
                ].join(' ')}
                src={imageUrl}
                {...mediaProps}
            />
        </div>
    )
}

export default MediaContent;