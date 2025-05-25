import type { FC, MouseEvent } from 'react';

export interface ButtonProps {
    className?: string;
    href?: string;
    label: string;
    tag?: 'button' | 'a';
    targetId?: string;
    onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
    className,
    href = '',
    label = '',
    tag: Tag = 'button',
    targetId = '',
    onClick,
}) => {
    const handleClick = (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        event.preventDefault();

        if (targetId) {
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'auto' }); // Scroll istantaneo
            }
        }

        // Poi chiudo il menu
        if (typeof onClick === 'function') {
            setTimeout(() => {
                onClick();
            }, 50); // leggero delay per assicurarsi che lo scroll avvenga prima
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
