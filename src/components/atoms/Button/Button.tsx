import type { FC, MouseEvent } from 'react';

export interface ButtonProps {
    className?: string;
    download?: boolean;
    href?: string;
    label: string;
    tag?: 'button' | 'a';
    targetId?: string;
    onClick?: () => void;
    variant?: 'default' | 'link' | 'primary' | 'secondary';
}

const Button: FC<ButtonProps> = ({
    className,
    download = false,
    href = '',
    label = '',
    tag: Tag = 'button',
    targetId = '',
    onClick,
    variant = 'default',
}) => {
    const handleClick = (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        if (targetId) {
            event.preventDefault();

            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'auto' });
            }

            if (typeof onClick === 'function') {
                setTimeout(() => {
                    onClick();
                }, 50);
            }
        } else {
            if (typeof onClick === 'function') {
                onClick();
            }
        }
    };

    const classes = ['cta', `cta--${variant}`, className].filter(Boolean).join(' ');

    if (href) {
        return (
            <a
                href={href || '#'}
                className={classes}
                target={download ? undefined : "_blank"}
                rel={download ? undefined : "noopener noreferrer"}
                download={download}
                onClick={handleClick}
            >
                {label}
            </a>
        );
    }

    return (
        <button className={classes} onClick={handleClick}>
            {label}
        </button>
    );
};

export default Button;
