import type { FC } from "react";
import type { ImageProps } from "../../atoms/Image/Image";

import Container from "../../atoms/Container/Container";
import Section from "../../atoms/Section/Section";
import SliderGallery from "../../organisms/SliderGallery/SliderGallery";
import Content, { ContentProps } from "../../molecules/Content/Content";

interface SliderGallerySectionProps {
    content?: ContentProps;
    mediaList?: ImageProps[];
    idSection?: string;
}

const SliderGallerySection: FC<SliderGallerySectionProps> = ({
    content,
    mediaList,
    idSection = '',
}) => {

    return (
        <Section 
            bgColor="bg-primary"
            id={idSection} 
        >
            <Container>
                <Content
                    {...content}
                />
                <SliderGallery mediaList={mediaList} />
            </Container>
        </Section>
    )
}

export default SliderGallerySection;