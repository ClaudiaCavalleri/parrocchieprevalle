import type { FC } from "react";
import type { ImageProps } from "../../atoms/Image/Image";
import type { ContentProps } from "../../molecules/Content/Content";
import Container from "../../atoms/Container/Container";

import Section from "../../atoms/Section/Section";
import Content from "../../molecules/Content/Content";
import Image from "../../atoms/Image/Image";

interface CoverSectionProps {
    contentList?: ContentProps[];
    height?: 'full-height' | 'medium-height' | 'auto-height';
    idSection?: string;
    mediaProps?: ImageProps;
    titleContent?: Omit<ContentProps, 'columns'|'ctaClassName'|'label'>
}

const CoverSection: FC<CoverSectionProps> = ({
    contentList = [],
    height = 'auto-height',
    idSection = '',
    mediaProps,
    titleContent,
}) => {
    const hasImage = !!mediaProps?.src

    const sectionClassName = [
        'cover-section',
        height,
    ].join(' ')

    return (
        <Section className={sectionClassName} id={idSection} bgColor="bg-secondary">
            <Container>
                <div className={`content ${hasImage ? 'text-white' : ''}`}>

                    <Content {...titleContent}/>

                    {(Array.isArray(contentList) && contentList.length > 0) && 
                        <div className="grid-container">
                            {contentList.map((item, index) => (
                                <Content 
                                    className={`${hasImage ? 'border-white' : 'border-primary'}`}
                                    key={index}
                                    title={item.title}
                                    subtitle={item.subtitle}
                                    text={item.text}
                                    cta={item.cta}
                                    align="text-center"
                                />
                            ))}
                        </div>
                    }
                </div>
            </Container>

            {hasImage && 
                <div className="img-overlay-wrapper">
                    <Image
                        className="cover-image"
                        pictureClassName="cover-picture"
                        {...mediaProps}
                    />
                    <div className="overlay"></div>
                </div>
            }
        </Section>
    )
}

export default CoverSection;