import type { FC } from "react";
import type { ButtonProps } from "../../atoms/Button/Button";
import type { TextRowProps } from "../../molecules/TextRow/TextRow";
import type { ImageProps } from "../../atoms/Image/Image";

import Container from "../../atoms/Container/Container";
import Button from "../../atoms/Button/Button";
import TextList from "../../cells/TextList/TextList";
import Image from "../../atoms/Image/Image";

export interface MenuProps {
    contentList?: TextRowProps[];
    ctaList?: ButtonProps[];
    ctaClassName?: string;
    isActive?: boolean;
    mediaProps?: ImageProps;
    onClose: () => void; 
}

const Menu: FC<MenuProps> = ({
    contentList = [],
    ctaList = [],
    ctaClassName = '',
    isActive,
    mediaProps,
    onClose,
}) => {
    const hasContentList: boolean = Array.isArray(contentList) && contentList.length > 0;
    const hasCTA: boolean = !!ctaList;
    const hasImage = !!mediaProps?.src

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
                                variant="link"
                            />
                        ))}
                    </div>
                )}
                <hr/>
                {hasImage &&
                    <Image
                        pictureClassName={[
                            'media',
                        ].join(' ')}
                        {...mediaProps}
                    />
                }
                {hasContentList && 
                    <TextList
                        list={contentList}
                    />
                }
            </Container>
        </menu>
    )
}

export default Menu;