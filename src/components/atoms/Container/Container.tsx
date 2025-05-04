import type { FC } from 'react';
import type { ComponentProps } from '@/@types/components';

export interface ContainerProps extends ComponentProps {
    className?: string;
    containerSize?: string;
    grid?: string;
    sideSpacing?: string;
    size?: string;
}

const Container: FC<ContainerProps> = ({
    children,
    className = 'relative',
    containerSize = '',
    grid,
    sideSpacing = [
        'px-2',
        'sm:px-3',
        'md:px-4',
        'lg:px-6',
        'xl:px-8',
        '2xl:px-12',
        '3xl:px-16'
    ].join(' '),
    size = 'max-w-[1400px] mx-auto',
    ...props
}) => {
    const componentClassName = [
        className,
        grid,
        sideSpacing,
        containerSize && containerSize !== '' ? containerSize : size,
    ];

    return (
        <div
            className={componentClassName.join(' ').trim()}
            {...props}
        >
            {children}
        </div>
    );
}

export default Container;