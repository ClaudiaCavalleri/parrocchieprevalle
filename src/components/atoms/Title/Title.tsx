import React, { FC, HTMLAttributes } from 'react';

export interface TitleProps extends HTMLAttributes<HTMLOrSVGElement> {
    className?: string;
    tag?: React.ElementType;
    weight?: 'font-regular' | 'font-bold';
}

const Title: FC<TitleProps> = ({
    className = '',
    children,
    tag: Tag = 'h1',
    weight = 'font-regular',
    ...props
}) => {
    const componentClassName = [
        className,
        weight,
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

export default Title;