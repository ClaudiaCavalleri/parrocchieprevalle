import type { DOMAttributes, FC } from 'react';
import type { ElementType } from 'react';

export interface SectionProps extends DOMAttributes<HTMLOrSVGElement> {
    bgColor?: string;
    className?: string;
    overflowHidden?: boolean;
    spacer?: string;
    tag?: ElementType;
}

const Section: FC<SectionProps> = ({
    bgColor,
    children,
    className = 'section',
    spacer,
    tag: Tag = 'section',
    ...props
}) => {
    const componentClassName = [
        'relative',
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