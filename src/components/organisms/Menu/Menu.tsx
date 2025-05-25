import type { FC } from "react";
import type { ButtonProps } from "../../atoms/Button/Button";

import Container from "../../atoms/Container/Container";
import Button from "../../atoms/Button/Button";

export interface MenuProps {
    ctaList?: ButtonProps[];
    ctaClassName?: string;
    isActive?: boolean;
    onClose: () => void; 
}

const Menu: FC<MenuProps> = ({
    ctaList = [],
    ctaClassName = '',
    isActive,
    onClose,
}) => {
   
    const hasCTA: boolean = !!ctaList;

    return (
        <menu className={`mobile-menu bg-primary-dark ${isActive ? 'open' : ''}`}>
            <Container className="menu-container">
                {hasCTA && (
                    <div className={`cta-wrapper ${ctaClassName}`}>
                        {ctaList.map((cta, index) => (
                            <Button 
                                key={index} 
                                {...cta} 
                                onClick={() => {onClose()}}
                            />
                        ))}
                    </div>
                )}
            </Container>
        </menu>
    )
}

export default Menu;