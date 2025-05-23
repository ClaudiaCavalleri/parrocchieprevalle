'use client'

import type { FC } from "react";
import type { NavbarProps } from "../../organisms/Navbar/Navbar";
import type { ButtonProps } from "../../atoms/Button/Button";

import Navbar from "../../organisms/Navbar/Navbar";
import Menu from "../../organisms/Menu/Menu";

interface HeaderProps {
    navbar?: NavbarProps;
    menu?: ButtonProps[];
}

const Header: FC<HeaderProps> = ({
    navbar,
    menu = [],
}) => {
    const isMobile = () =>
        typeof window !== 'undefined' && window.innerWidth < 1024;

    
    return (
        <header className="bg-primary-dark relative">
            <Navbar {...navbar}/>

            <Menu ctaList={menu}/>
        </header>
    )
}

export default Header;