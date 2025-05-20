import type { DOMAttributes, FC } from 'react';
import type { ElementType } from 'react';

export interface SectionProps extends DOMAttributes<HTMLOrSVGElement> {
    bgColor?: string;
    className?: string;
    id?: string;
    overflowHidden?: boolean;
    spacer?: string;
    tag?: ElementType;
}

const Section: FC<SectionProps> = ({
    bgColor,
    children,
    className = 'section',
    id,
    spacer,
    tag: Tag = 'section',
    ...props
}) => {
    const componentClassName = [
        className,
        'relative',
        bgColor,
    ];

    return (
        <Tag
            className={componentClassName.join(' ').trim()}
            id={id}
            {...props}
        >
            {children}
        </Tag>
    );
};

export default Section;