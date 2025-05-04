import React, { FC, HTMLAttributes } from 'react';

export type TitleSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';

export interface TitleProps extends HTMLAttributes<HTMLOrSVGElement> {
    align?: 'text-left' | 'text-center' | 'text-right' | 'text-justify';
    className?: string;
    titleColor?: string;
    isHTML?: boolean;
    isAltFont?: boolean;
    size?: TitleSize;
    tag?: React.ElementType;
    weight?: 'font-regular' | 'font-medium' | 'font-bold';
    uppercase?: boolean;
}

const Title: FC<TitleProps> = ({
    align = 'text-left',
    className = 'text-red-300',
    children,
    titleColor = '',
    isHTML = false,
    size = 'lg',
    tag: Tag = 'h1',
    weight = 'font-regular',
    uppercase = true,
    ...props
}) => {
    const uppercaseClass = uppercase ? 'uppercase' : '';
    const componentClassName = [
        'a-title',
        align,
        className,
        titleColor,
        weight,
        uppercaseClass,
    ];

    let sizeClass = '';
    switch (size) {
        case 'xs':
            // 18px
            sizeClass = 'text-md';
            break;

        case 'sm':
            // 24px
            sizeClass = 'text-lg xl:text-xl';
            break;

        case 'md':
            // 36px
            sizeClass = 'text-xl md:text-2xl xl:text-4xl';
            break;

        case 'lg':
            // 60px
            sizeClass = 'text-3xl md:text-4xl xl:text-6xl';
            break;

        case 'xl':
            // 72px
            sizeClass = 'text-4xl md:text-5xl xl:text-7xl';
            break;

        case '2xl':
            // 96px
            sizeClass = 'text-4xl sm:text-5xl md:text-6xl 2xl:text-8xl';
            break;

        case '3xl':
            //128px
            sizeClass = 'text-5xl sm:text-6xl md:text-7xl 2xl:text-9xl';
            break;

        default:
            break;
    }

    componentClassName.push(sizeClass);

    let textComponent = <Tag>{children}</Tag>;

    if (isHTML) {
        const htmlContent: { __html: string | TrustedHTML } = {
            __html: children as string
        };

        textComponent = <div dangerouslySetInnerHTML={htmlContent} />
    }

    return (
        <div
            className={componentClassName.join(' ').trim()}
            {...props}
        >
            {textComponent}
        </div>
    );
};

export default Title;