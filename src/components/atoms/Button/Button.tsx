import type { FC, MouseEvent } from 'react';

export interface ButtonProps {
    className?: string;
    href?: string;
    label: string;
    tag?: 'button' | 'a';
    targetId?: string;
}

const Button: FC<ButtonProps> = ({
    className,
    href = '',
    label = '',
    tag: Tag = 'button',
    targetId = '',
}) => {
    const handleClick = (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        if (targetId) {
            event.preventDefault();
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    if (href) {
        return (
            <a
                href={href || '#'}
                className='cta'
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClick}
            >
                {label}
            </a>
        );
    }

    return (
        <button className='cta' onClick={handleClick}>
            {label}
        </button>
    );
};

export default Button;
