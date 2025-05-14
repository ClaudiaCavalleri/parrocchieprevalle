import type { FC } from 'react';
import type{ TextProps } from '../../atoms/Text/Text';
import type { TitleProps } from '../../atoms/Title/Title';

import Title from '../../atoms/Title/Title';
import Text from '../../atoms/Text/Text';

export interface TabsItemProps {
    columns?: 1 | 2;
    // cta?: CTA[];
    ctaClassName?: string;
    // ctaSize?: ButtonSizes;
    label?: string;
    subtitle?: string;
    subtitleProps?: TitleProps;
    text?: string[];
    textProps?: TextProps;
    title?: string;
    titleProps?: TitleProps;
}

const TabsItem: FC<TabsItemProps> = ({
    // className = '',
    columns = 1,
    // cta = [],
    ctaClassName = '',
    // ctaSize = 'md',
    subtitle = '',
    subtitleProps,
    text = [],
    textProps,
    title = '',
    titleProps,
}) => {
    const hasTitle: boolean = typeof title === 'string' && title !== '';
    const hasText: boolean = Array.isArray(text) && text.length > 0;

    return (
        <tr className="tab-item">
            {
                hasTitle && (
                    <Title
                        className="mt-6 first:mt-0 !text-red-300"
                        isHTML={true}
                        size="lg"
                        tag="h2"
                        {...titleProps}
                    >
                        {title || titleProps?.title}
                    </Title>
                )
            }

            <td className='column'>
                {hasText && (
                    text.map((item, index) =>(
                        <Text
                            key={index}
                            className="mt-6 first:mt-0 text-left"
                            {...textProps}
                        >
                            {item}
                        </Text>
                    ))
                )}
            </td>
        </tr>
    )
}

export default TabsItem;