import type { FC } from 'react';
import type { TextProps } from '../../atoms/Text/Text';
import type { TitleProps } from '../../atoms/Title/Title';

import Title from '../../atoms/Title/Title';
import Text from '../../atoms/Text/Text';

export interface ContentProps extends TitleProps {
    align?: 'text-center' | 'text-left';
    // cta?: CTA[];
    ctaClassName?: string;
    // ctaSize?: ButtonSizes;
    subtitle?: string;
    subtitleProps?: TitleProps;
    text?: string;
    textProps?: TextProps;
    title?: string;
    titleProps?: TitleProps;
}

const Content: FC<ContentProps> = ({
    align = 'text-left',
    className = '',
    // cta = [],
    ctaClassName = '',
    // ctaSize = 'md',
    subtitle = '',
    subtitleProps,
    text = '',
    textProps,
    title = '',
    titleProps,
}) => {
    const hasTitle: boolean = typeof title === 'string' && title !== '';
    const hasSubtitle: boolean = typeof subtitle === 'string' && subtitle !== '';
    const hasText: boolean = typeof text === 'string' && text !== '';
    // const hasCTA: boolean = Array.isArray(cta) && cta.length > 0;

    const wrapperClassName = [
        className,
        'content-wrapper',
        align
    ].join(' ')

    return (
        <div className={wrapperClassName}>
            {
                hasTitle && (
                    <Title
                        className="mt-6 first:mt-0"
                        size="lg"
                        tag='h2'
                        {...titleProps}
                    >
                        {title || titleProps?.title}
                    </Title>
                )
            }

            {
                hasSubtitle && (
                    <Title
                        className="mt-6 first:mt-0"
                        size="md"
                        tag='h3'
                        {...subtitleProps}
                    >
                        {subtitle || subtitleProps?.title}
                    </Title>
                )
            }

            {
                hasText && (
                    <Text
                        className="mt-6 first:mt-0"
                        {...textProps}
                    >
                        {text}
                    </Text>
                )
            }

            {/* {
                hasCTA && (
                    <div className="flex flex-row justify-between items-center u-spacer-lg first:mt-0">
                        <BowButtonGroup
                            className={ctaClassName}
                            list={cta}
                            size={ctaSize}
                        />
                    </div>
                )
            } */}
        </div>
    )
}

export default Content;