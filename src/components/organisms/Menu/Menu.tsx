import type { FC } from "react";
import type { ButtonProps } from "../../atoms/Button/Button";

import Container from "../../atoms/Container/Container";
import Button from "../../atoms/Button/Button";

export interface MenuProps {
    ctaList?: ButtonProps[];
    ctaClassName?: string;
}

const Menu: FC<MenuProps> = ({
    ctaList = [],
    ctaClassName = '',
}) => {
   
    const hasCTA: boolean = !!ctaList;

    return (
        <menu className="bg-primary-dark">
            <Container className="menu-container">
                {hasCTA && (
                    <div className={`cta-wrapper ${ctaClassName}`}>
                        {ctaList.map((cta, index) => (
                            <Button {...cta} />
                        ))}
                    </div>
                )}
            </Container>
        </menu>
    )
}

export default Menu;