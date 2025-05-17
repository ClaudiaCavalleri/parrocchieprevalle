import type { FC } from "react";
import type { ImageProps } from "../../atoms/Image/Image";
import Container from "../../atoms/Container/Container";

import Section from "../../atoms/Section/Section";
import Content, { ContentProps } from "../../molecules/Content/Content";
import { codiciIabn } from "../../../data/codiciIban";
import Image from "../../atoms/Image/Image";

interface BannerSectionProps {
    titleContent?: Omit<ContentProps, 'columns'|'ctaClassName'|'label'>
    mediaProps?: ImageProps;
}

const BannerSection: FC<BannerSectionProps> = ({
    titleContent,
    mediaProps,
}) => {
    const hasImage: boolean = mediaProps?.src !== ''

    return (
        <Section className="bg-secondary-light relative">
            <Container>
                <div className={`content ${hasImage ? 'text-white' : ''}`}>
                    <Content {...titleContent}/>
                    <div className="grid-container">
                        <Content 
                            title={codiciIabn[0].title}
                            subtitle=""
                            text={codiciIabn[0].text[0]}
                        />
                        <Content 
                            title={codiciIabn[1].title}
                            subtitle=""
                            text={codiciIabn[1].text[0]}
                        />
                    </div>
                </div>
            </Container>
            {
                hasImage && 
                    <div className="img-overlay-wrapper">
                        <Image
                            className="cover-image"
                            pictureClassName="cover-picture"
                            alt={mediaProps?.alt}
                            src='https://picsum.photos/600/400?random'
                            {...mediaProps}
                        />
                        <div className="overlay"></div>
                    </div>
            }
        </Section>
    )
}

export default BannerSection;