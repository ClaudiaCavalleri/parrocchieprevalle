import React from 'react';
import { IoIosMenu } from "react-icons/io";
// import './Icon.css';

interface IconProps {
    size?: number;
    color?: string;
}

const Icon: React.FC<IconProps> = ({ 
    size = 24, color = 'black' 
}) => {

    return (
        <IoIosMenu size={size} color={color} className="icon" />
    )
};

export default Icon;
