import type { FC } from "react";
import type { ImageProps } from "../../atoms/Image/Image";
import type { TitleProps } from "../../atoms/Title/Title";
import type { ButtonProps } from "../../atoms/Button/Button";

import Container from "../../atoms/Container/Container";
import Button from "../../atoms/Button/Button";
import Content from "../../molecules/Content/Content";
import Image from "../../atoms/Image/Image";
import Icon from "../../atoms/Icon/Icon";

export interface NavbarProps {
    ctaList?: ButtonProps[];
    ctaClassName?: string;
    mediaProps?: ImageProps;
    subtitle?: string;
    subtitleProps?: TitleProps;
    title?: string;
    titleProps?: TitleProps;
}

const Navbar: FC<NavbarProps> = ({
    ctaList = [],
    ctaClassName = '',
    mediaProps,
    subtitle,
    subtitleProps,
    title = '',
    titleProps,
}) => {
   
    const hasContent: boolean = 
        (typeof title === 'string' && title !== '') ||
        (typeof subtitle === 'string' && subtitle !== '')
    const hasCTA: boolean = !!ctaList;
    const hasImage = !!mediaProps?.src

    return (
        <Container className="header-wrapper">
            <div className="icon-title-wrapper">
                {hasImage &&
                    <Image
                        pictureClassName={[
                            'media',
                        ].join(' ')}
                        {...mediaProps}
                    />
                }
                {hasContent && (
                    <Content
                        subtitle={subtitle}
                        subtitleProps={{
                            tag: 'p'
                        }}
                        title={title}
                        titleProps={{
                            tag: 'h3'
                        }}
                    />
                )}
            </div>
            
            {hasCTA && (
                <div className={`cta-wrapper ${ctaClassName}`}>
                    {ctaList.map((cta, index) => (
                        <Button {...cta} />
                    ))}
                </div>
            )}
            <Icon  color="white" size={30}/>
        </Container>
    )
}

export default Navbar;