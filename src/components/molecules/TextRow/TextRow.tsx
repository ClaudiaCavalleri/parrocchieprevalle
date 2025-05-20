import type { FC, ReactNode } from 'react';
import type { TextProps } from '../../atoms/Text/Text';
import type { TitleProps } from '../../atoms/Title/Title';

import Title from '../../atoms/Title/Title';
import Text from '../../atoms/Text/Text';
import React from 'react';

export interface TextRowProps extends TitleProps {
    align?: 'text-center' | 'text-left';
    subtitle?: string|React.ReactNode;
    subtitleProps?: TitleProps;
    text?: string | React.ReactNode | Array<string | ReactNode>;
    textProps?: TextProps;
}

const TextRow: FC<TextRowProps> = ({
    align = 'text-left',
    className = '',
    subtitle,
    subtitleProps,
    text = '',
    textProps,
}) => {
    const hasSubtitle: boolean = !!subtitle;
    const hasText: boolean = !!text && (Array.isArray(text) ? text.length > 0 : true);

    const wrapperClassName = [
        className,
        'text-row-wrapper',
        align
    ].join(' ')

    return (
        <div className={wrapperClassName}>
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
                    Array.isArray(text) ? (
                        text.map((item, index) => (
                            <Text
                                key={index}
                                className="mt"
                                {...textProps}
                            >
                                {item}
                            </Text>
                        ))
                    ) : (
                        <Text
                            className="mt"
                            {...textProps}
                        >
                            {text}
                        </Text>
                    )
                )
            }

        </div>
    )
}

export default TextRow;