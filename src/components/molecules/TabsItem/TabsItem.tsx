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

    const classNameComponent: string[] = [
        'grid-container',
        'flex flex-col items-start',
        columns === 2
            ? 'xl:grid xl:grid-cols-2 xl:gap-x-20 xl:gap-y-0'
            : '',
        // className && className
    ];

    return (
        <div className={classNameComponent.join(' ')}>
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


            {
                hasText && (
                    text.map((item, index) =>(
                        <div className='column' key={index}>
                            <Text
                                className="mt-6 first:mt-0 text-left"
                                {...textProps}
                            >
                                {item}
                            </Text>
                        </div>
                    ))
                )
            }
        </div>
    )
}

export default TabsItem;