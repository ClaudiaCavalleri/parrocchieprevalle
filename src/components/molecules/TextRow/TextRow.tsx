import type { FC, ReactNode } from 'react';
import type { TextProps } from '../../atoms/Text/Text';
import type { TitleProps } from '../../atoms/Title/Title';

import Title from '../../atoms/Title/Title';
import Text from '../../atoms/Text/Text';
import React from 'react';

export interface TextRowProps extends TitleProps {
    align?: 'text-center' | 'text-left';
    elTag?: React.ElementType;
    subtitle?: string|React.ReactNode;
    subtitleProps?: TitleProps;
    tag?: 'tr' | 'div';
    text?: string | React.ReactNode | Array<string | ReactNode>;
    textProps?: TextProps;
}

const TextRow: FC<TextRowProps> = ({
    align = 'text-left',
    className = '',
    elTag,
    subtitle,
    subtitleProps,
    tag: Tag = 'div',
    text = '',
    textProps,
}) => {
    const hasSubtitle: boolean = !!subtitle;
    const hasText: boolean = !!text && (Array.isArray(text) ? text.length > 0 : true);

    const wrapperClassName = [
        className,
        'tab-item',
        align
    ].join(' ')

    return (
        <Tag className={wrapperClassName}>
            {
                hasSubtitle && (
                    <Title
                        className="mt h3-td"
                        tag={Tag === 'tr' ? 'td' : elTag}
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
                                tag={Tag === 'tr' ? 'td' : elTag}
                                {...textProps}
                            >
                                {item}
                            </Text>
                        ))
                    ) : (
                        <Text
                            className="mt"
                            tag={Tag === 'tr' ? 'td' : elTag}
                            {...textProps}
                        >
                            {text}
                        </Text>
                    )
                )
            }

        </Tag>
    )
}

export default TextRow;