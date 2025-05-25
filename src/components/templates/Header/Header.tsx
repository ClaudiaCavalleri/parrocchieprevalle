'use client'

import { useContext, useEffect, useState, type FC } from "react";
import type { NavbarProps } from "../../organisms/Navbar/Navbar";
import type { ButtonProps } from "../../atoms/Button/Button";

import Navbar from "../../organisms/Navbar/Navbar";
import Menu from "../../organisms/Menu/Menu";
import Context from "src/context/context";

interface HeaderProps {
    navbar?: NavbarProps;
    menu?: ButtonProps[];
}

const Header: FC<HeaderProps> = ({
    navbar,
    menu = [],
}) => {
    // const { isActive } = useContext(Context);
    const [isActive, setIsActive] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState(false);

    const checkIsMobile = () => {
        setIsMobile(typeof window !== 'undefined' && window.innerWidth < 1024);
    };

    useEffect(() => {
        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);
        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);
    
    return (
        <header className="bg-primary-dark">
            <Navbar 
                {...navbar}
                isActive={isActive} 
                onToggle={() => setIsActive(!isActive)}   
                isMobile={isMobile}
            />

            {isMobile && 
                <Menu 
                    isActive={isActive}
                    ctaList={navbar?.ctaList ?? []}
                    onClose={() => setIsActive(false)}
                />
            }
        </header>
    )
}

export default Header;