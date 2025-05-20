import { DOMAttributes, FC } from 'react';
import useFacebookSDK from '../../../hooks/useFacebookSDK';

interface FacebookWidgetProps extends DOMAttributes<HTMLOrSVGElement> {
    className?: string;
    href: string;
    width?: string | number;
    height?: string | number;
    // position?: 'left' | 'right';
}

const FacebookWidget: FC<FacebookWidgetProps> = ({
    className = '',
    href,
    width = 250,
    height = 400,
    // position = 'right',
}) => {
    useFacebookSDK(true);

    // const wrapperClassName = position === 'left' ? 'place-first' : 'place-second';
    const componentClassName = [
        'fb-page',
        className
    ].join(' ')

    return (
        <div
            data-href={href}
            data-tabs="timeline"
            data-width={width.toString()}
            data-height={height.toString()}
            data-small-header="true"
            data-adapt-container-width="false"
            data-hide-cover="false"
            data-show-facepile="false"
            className={componentClassName}
        >
            <blockquote
                cite={href}
                className="fb-xfbml-parse-ignore"
            >
                <a href={href}>
                    {new URL(href).hostname}
                </a>
            </blockquote>
        </div>
    );
};

export default FacebookWidget;
