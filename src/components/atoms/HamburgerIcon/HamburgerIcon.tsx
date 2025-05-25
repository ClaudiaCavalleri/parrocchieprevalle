import React from 'react';
import { IoIosMenu, IoMdClose } from "react-icons/io";
// import './Icon.css';

interface HamburgerIconProps {
    size?: number;
    color?: string;
    isActive?: boolean;
    onClick: () => void;
}

const HamburgerIcon: React.FC<HamburgerIconProps> = ({ 
    size = 24, 
    color = 'black', 
    isActive = false, 
    onClick,
}) => {
    const Icon = isActive ? IoMdClose : IoIosMenu;

    return (
        <div 
            onClick={onClick}
            className="menu-toggle-button"
            aria-label={isActive ? "Chiudi menu" : "Apri menu"}
        >
            <Icon size={size} color={color} />
        </div>
    )
};

export default HamburgerIcon;
