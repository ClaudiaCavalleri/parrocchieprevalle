'use client'

import { useContext, useEffect, useState, type FC } from "react";
import type { NavbarProps } from "../../organisms/Navbar/Navbar";
import type { ButtonProps } from "../../atoms/Button/Button";
import type { TextRowProps } from "../../molecules/TextRow/TextRow";
import type { ImageProps } from "../../atoms/Image/Image";

import Navbar from "../../organisms/Navbar/Navbar";
import Menu from "../../organisms/Menu/Menu";
import Context from "src/context/context";

interface HeaderProps {
    contentList?: TextRowProps[];
    menu?: ButtonProps[];
    mediaProps?: ImageProps;
    navbar?: NavbarProps;
}

const Header: FC<HeaderProps> = ({
    contentList = [],
    menu = [],
    mediaProps,
    navbar,
}) => {
    // const { isActive } = useContext(Context);
    const [isActive, setIsActive] = useState<boolean>(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const checkIsMobile = () => {
        setIsMobile(typeof window !== 'undefined' && window.innerWidth < 1024);
    };

    useEffect(() => {
        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);
        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);

    useEffect(() => {
        if (isActive) {
            setIsVisible(true);
            document.body.style.overflow = 'hidden';
        } else {
            const timeout = setTimeout(() => setIsVisible(false), 400);
            document.body.style.overflow = '';
            return () => clearTimeout(timeout);
        }
    }, [isActive]);
    
    return (
        <header className="bg-primary-dark">
            <Navbar 
                {...navbar}
                isActive={isActive} 
                onToggle={() => setIsActive(!isActive)}   
                isMobile={isMobile}
            />

            {isMobile && isVisible &&
                <Menu 
                    isActive={isActive}
                    ctaList={navbar?.ctaList ?? []}
                    contentList={contentList}
                    mediaProps={mediaProps}
                    onClose={() => setIsActive(false)}
                />
            }
        </header>
    )
}

export default Header;