import type { FC, ReactNode } from 'react';
import type { TextProps } from '../../atoms/Text/Text';
import type { TitleProps } from '../../atoms/Title/Title';
import type { ButtonProps } from '../../atoms/Button/Button';

import Title from '../../atoms/Title/Title';
import Text from '../../atoms/Text/Text';
import React from 'react';
import Button  from '../../atoms/Button/Button';

export interface ContentProps extends TitleProps {
    align?: 'text-center' | 'text-left';
    cta?: ButtonProps;
    ctaClassName?: string;
    subtitle?: ReactNode;
    subtitleProps?: TitleProps;
    text?: string|React.ReactNode;
    textProps?: TextProps;
    title?: string;
    titleProps?: TitleProps;
}

const Content: FC<ContentProps> = ({
    align = 'text-left',
    className = '',
    cta,
    ctaClassName = '',
    subtitle,
    subtitleProps,
    text = '',
    textProps,
    title = '',
    titleProps,
}) => {
    const hasTitle: boolean = typeof title === 'string' && title !== '';
    const hasSubtitle: boolean = typeof subtitle === 'string' && subtitle !== '';
    const hasText: boolean = typeof text === 'string' && text !== '';
    const hasCTA: boolean = !!cta;

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
                        className="mt"
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
                        className="mt"
                        tag='h4'
                        {...subtitleProps}
                    >
                        {subtitle || subtitleProps?.title}
                    </Title>
                )
            }

            {
                hasText && (
                    <Text
                        className="mt"
                        {...textProps}
                    >
                        {text}
                    </Text>
                )
            }

            {
                hasCTA && (
                    <div className={`cta-wrapper ${ctaClassName}`}>
                        <Button {...cta} />
                    </div>
                )
            }
        </div>
    )
}

export default Content;