'use client';

import type { FC, HTMLAttributes } from "react";

import { createContext } from 'react';

export interface ContextDef {
    isActive?: boolean;
}

interface ContextComponentProps extends HTMLAttributes<HTMLOrSVGElement> {
    data: ContextDef
}

const Context = createContext<ContextDef>({
    isActive: false,
});

export const ContextComponent: FC<ContextComponentProps> = ({
    children,
    data
}) => {
    return <>
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    </>
}

export default Context;