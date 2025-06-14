import type { DOMAttributes, FC } from 'react';

export interface ContainerProps extends DOMAttributes<HTMLOrSVGElement> {
    className?: string;
    containerSize?: string;
    grid?: string;
    sideSpacing?: string;
    size?: string;
}

const Container: FC<ContainerProps> = ({
    children,
    className = '',
    containerSize = '',
    grid,
    ...props
}) => {
    const componentClassName = [
        'container',
        className,
        grid,
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