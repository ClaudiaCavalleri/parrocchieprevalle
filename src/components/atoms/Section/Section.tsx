import type { FC } from 'react';
import type { ElementType } from 'react';
import type { ComponentProps } from '@/@types/components';

export interface SectionProps extends ComponentProps {
    bgColor?: string;
    className?: string;
    overflowHidden?: boolean;
    spacer?: string;
    tag?: ElementType;
}

const Section: FC<SectionProps> = ({
    bgColor,
    children,
    className = '',
    overflowHidden = true,
    spacer,
    tag: Tag = 'section',
    ...props
}) => {
    let spacerClass: string = 'u-spacer-lg';

    if (typeof spacer === 'string') {
        spacerClass = spacer;
    }

    const componentClassName = [
        'relative',
        overflowHidden ? 'overflow-hidden' : '',
        spacerClass,
        bgColor,
        className,
    ];

    return (
        <Tag
            className={componentClassName.join(' ').trim()}
            {...props}
        >
            {children}
        </Tag>
    );
};

export default Section;